import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { ProductImage } from "../../data/products";

type Props = {
  images: ProductImage[];
  initialIndex: number;
  onClose: () => void;
};

export function ProductLightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === "ArrowRight") setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, images.length]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Product image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      <div className="flex w-full max-w-5xl flex-col gap-4" onClick={(e) => e.stopPropagation()}>
        {/* Main image */}
        <div className="flex items-center justify-center">
          <img
            src={current.url}
            alt={current.alt || `Product image ${index + 1}`}
            className="max-h-[70vh] max-w-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setIndex((i) => (i > 0 ? i - 1 : images.length - 1))}
            className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center text-sm text-white/70">
            {index + 1} / {images.length}
          </div>

          <button
            onClick={() => setIndex((i) => (i < images.length - 1 ? i + 1 : 0))}
            className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 overflow-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition ${
                  i === index ? "border-brand" : "border-white/20"
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <img src={img.url} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <div className="text-center text-xs text-white/50">
          Use arrow keys to navigate • ESC to close
        </div>
      </div>
    </div>
  );
}

export default ProductLightbox;
