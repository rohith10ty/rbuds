from pathlib import Path
from io import BytesIO
import requests
from PIL import Image, ImageOps, ImageChops

IMAGES = {
    'sony-wf-1000xm5': 'https://www.magnumsound.nz/cdn/shop/files/WF-1000XM5_S_standard-Large.jpg?height=1200&pad_color=fff&v=1716982694&width=1200',
    'sennheiser-mtw4': 'https://cdn.cs.1worldsync.com/05/3e/053e1335-34de-43da-9bef-e4e65453e297.jpg',
    'nothing-ear': 'https://lmt-web.mstatic.lv/eshop/22753/NOTHING_Ear_white_1.png',
    'jbl-tour-pro-3': 'https://shoplineimg.com/59c0c7afd4e395ec10000641/6782254e30529f6981518ccc/800x.png',
    'jabra-elite-10-gen-2': 'https://assets2.jabra.com/0/1/d/a/01da37bd26360f1236b862e7f1000c7b3934acd4_Jabra_Elite_10_G2_Soft_White_03.png',
}

for name, url in IMAGES.items():
    try:
        response = requests.get(url, timeout=30, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        source = Image.open(BytesIO(response.content)).convert('RGBA')
        opaque = Image.new('RGBA', source.size, '#f8f8f7')
        opaque.alpha_composite(source)
        image = opaque.convert('RGB')
        difference = ImageChops.difference(image, Image.new('RGB', image.size, '#f8f8f7')).convert('L')
        mask = difference.point(lambda value: 255 if value > 28 else 0)
        box = mask.getbbox()
        if box:
            pad = int(max(box[2]-box[0], box[3]-box[1]) * .08)
            image = image.crop((max(0, box[0]-pad), max(0, box[1]-pad), min(image.width, box[2]+pad), min(image.height, box[3]+pad)))
        image = ImageOps.contain(image, (880, 880), Image.Resampling.LANCZOS)
        canvas = Image.new('RGB', (1000, 1000), '#f8f8f7')
        canvas.paste(image, ((1000 - image.width) // 2, (1000 - image.height) // 2))
        destination = Path('public') / f'{name}.webp'
        canvas.save(destination, 'WEBP', quality=90, method=6)
        print(name, image.size, destination.stat().st_size)
    except Exception as error:
        print(name, 'FAILED', error)
