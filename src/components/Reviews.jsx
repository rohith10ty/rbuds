import React from 'react';
import { Star, CheckCircle2, ThumbsUp, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function Reviews() {
  const ratingBreakdown = [
    { stars: 5, percentage: 88, count: 7392 },
    { stars: 4, percentage: 9, count: 756 },
    { stars: 3, percentage: 2, count: 168 },
    { stars: 2, percentage: 0.7, count: 58 },
    { stars: 1, percentage: 0.3, count: 26 },
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#f8fafc] to-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Special Offer Banner */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
              <Tag className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                Limited Spring Launch Offer
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Enjoy 20% OFF Your First Wireless Audio Order
              </h3>
              <p className="text-sm text-blue-100 mt-1">
                Apply promotional voucher code <span className="font-mono font-bold bg-white/20 px-2.5 py-0.5 rounded text-white">RBUDS20</span> at checkout.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <a
              href="#products"
              className="px-7 py-3.5 rounded-full bg-white text-slate-950 font-bold text-sm shadow-md hover:bg-blue-50 transition-colors"
            >
              Claim Offer Now
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Customer Satisfaction
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Loved by 50,000+ Audiophiles Worldwide
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Real feedback from verified listeners, sound engineers, runners, and daily commuters.
          </p>
        </div>

        {/* Rating Summary Card & Progress Bars */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16 items-center p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
          
          {/* Left Score Card */}
          <div className="w-full lg:w-4/12 text-center lg:text-left flex flex-col items-center lg:items-start justify-center border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-10">
            <span className="text-7xl font-extrabold text-slate-950 tracking-tight leading-none">
              4.9
            </span>
            <div className="flex items-center gap-1.5 text-amber-400 my-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-base font-bold text-slate-900">
              Based on 8,400+ Verified Reviews
            </p>
            <p className="text-xs text-slate-400 mt-1">
              99.2% of customers recommend RBuds.
            </p>
          </div>

          {/* Right Progress Bars */}
          <div className="w-full lg:w-8/12 space-y-3">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-4 text-xs sm:text-sm">
                <span className="font-semibold text-slate-700 w-14 flex items-center gap-1">
                  {item.stars} <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
                </span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="font-semibold text-slate-600 w-12 text-right">
                  {item.percentage}%
                </span>
                <span className="text-slate-400 w-16 text-right hidden sm:inline">
                  ({item.count})
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-950 text-sm sm:text-base">{review.author}</h4>
                        <CheckCircle2 className="w-4 h-4 text-blue-600" title="Verified Buyer" />
                      </div>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                    {review.product}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h5 className="font-bold text-slate-950 text-lg mb-2">
                  "{review.title}"
                </h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {review.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Verified Purchase
                </span>
                <span className="flex items-center gap-1 hover:text-slate-600 cursor-pointer">
                  <ThumbsUp className="w-3.5 h-3.5" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
