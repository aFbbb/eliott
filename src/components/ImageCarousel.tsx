import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselImage {
  src: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

const ImageCarousel = ({ images, className = "" }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-xl bg-muted ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt || ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-primary-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-primary-foreground" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary-foreground" : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
