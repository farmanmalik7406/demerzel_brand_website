import React, { useState } from "react";
import { Heart, Share2, Copy, Check } from "lucide-react";

type Props = {
  productName: string;
  productUrl: string;
};

export function QuickActions({ productName, productUrl }: Props) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    // Store in localStorage for now
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts") || "[]");
    if (!savedProducts.includes(productUrl)) {
      savedProducts.push(productUrl);
      localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleShare = () => {
    const text = `Check out ${productName} on DEMERZEL: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: productName,
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      // Fallback to copy
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 flex gap-2">
      <button
        onClick={handleSave}
        className={`flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          saved
            ? "bg-brand/10 text-brand"
            : "border border-ink/10 text-charcoal/70 hover:border-brand hover:text-brand"
        }`}
        aria-label="Save product"
        title="Save to favorites"
      >
        <Heart size={16} fill={saved ? "currentColor" : "none"} />
        {saved ? "Saved" : "Save"}
      </button>

      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-2.5 text-sm font-semibold text-charcoal/70 transition hover:border-brand hover:text-brand"
        aria-label="Share product"
        title="Share this product"
      >
        <Share2 size={16} />
        Share
      </button>

      <button
        onClick={handleCopyLink}
        className={`flex items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition ${
          copied
            ? "bg-brand/10 text-brand"
            : "border border-ink/10 text-charcoal/70 hover:border-brand hover:text-brand"
        }`}
        aria-label="Copy link"
        title="Copy link to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default QuickActions;
