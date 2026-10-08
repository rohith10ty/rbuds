# RBuds

A responsive React and Vite storefront for a curated wireless earbud collection.

## Experience

- Editorial hero with a minimal, non-sticky navigation bar.
- Four-product showcase pinned during normal page scrolling: Samsung, Apple, Beats, Bose. Scrolling advances the products sideways and releases into the page after the fourth item.
- Twelve-product catalog with search, category filters, sorting, product details, wishlist, and bag interactions.
- Responsive desktop, laptop, tablet, and phone layouts, with reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`. The output is in `dist/`.

The bag and account interfaces use local browser state. Checkout and authentication are demonstration interactions; connect a commerce backend before taking real orders.

The five added catalog images are stored as optimized WebP files in `public/`. `download_product_images.py` records their source URLs and image processing steps.
