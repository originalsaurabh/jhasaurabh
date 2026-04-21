import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

interface SportzGalleryStripProps {
  title: string;
  images: GalleryImage[];
}

export function SportzGalleryStrip({ title, images }: SportzGalleryStripProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <section className="w-full flex flex-col items-center gap-6">
      <h2
        className="w-full max-w-[900px] text-center"
        style={{ color: "#000", fontSize: 24, fontFamily: "Inter, sans-serif", fontWeight: 600 }}
      >
        {title}
      </h2>

      {/* Horizontal scrollable strip */}
      <div
        className="w-full overflow-x-auto"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="flex items-stretch gap-6 px-2 pb-3" style={{ height: 328 }}>
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="shrink-0 h-full overflow-hidden rounded-md transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FF3800]"
              aria-label={`Open image ${i + 1}: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-auto object-cover block"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} — image viewer`}
          >
            {/* Close */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Image */}
            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Counter */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-white text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {openIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
