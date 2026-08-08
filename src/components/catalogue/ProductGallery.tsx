import React, { useState } from "react";
import type { ProductImage } from "../../data/products";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="rounded-lg bg-bone h-72 w-full" />;
  }

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
        <img src={images[index].url} alt={images[index].alt || "Product image"} className="h-[520px] w-full object-contain bg-white p-6" loading="eager" />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-auto">
          {images.map((img, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-20 w-28 shrink-0 overflow-hidden rounded-md border ${i === index ? "border-brand" : "border-ink/8"}`}>
              <img src={img.url} alt={img.alt || `Thumbnail ${i + 1}`} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
