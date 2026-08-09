import React, { useState } from "react";
import { ZoomIn } from "lucide-react";
import type { ProductImage } from "../../data/products";
import ProductLightbox from "./ProductLightbox";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return <div className="rounded-lg bg-bone h-72 w-full" />;
  }

  return (
    <>
      <div>
        <div className="group relative overflow-hidden rounded-lg border border-ink/10 bg-white">
          <img
            src={images[index].url}
            alt={images[index].alt || "Product image"}
            className="h-[520px] w-full object-contain bg-white p-6 cursor-pointer transition group-hover:opacity-90"
            loading="eager"
            onClick={() => setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && setLightboxOpen(true)}
            aria-label={`${images[index].alt || "Product image"} - click to enlarge`}
          />
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-4 right-4 rounded-full bg-brand/90 p-3 text-ink opacity-0 transition group-hover:opacity-100"
            aria-label="Zoom image"
          >
            <ZoomIn size={20} />
          </button>
        </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-20 w-28 shrink-0 overflow-hidden rounded-md border transition ${
                i === index ? "border-brand" : "border-ink/8"
              } hover:border-brand/50`}
              aria-label={`Select image ${i + 1}`}
            >
              <img src={img.url} alt={img.alt || `Thumbnail ${i + 1}`} className="h-full w-full object-cover cursor-pointer" loading={i === 0 ? "eager" : "lazy"} />
            </button>
          ))}
        </div>
      )}
      </div>
      {lightboxOpen && <ProductLightbox images={images} initialIndex={index} onClose={() => setLightboxOpen(false)} />}
    </>
  );
}

export default ProductGallery;

