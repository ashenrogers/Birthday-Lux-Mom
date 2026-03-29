import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516054817743-f2ed511c9535?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530103862676-de8892bf74f1?auto=format&fit=crop&q=80&w=800"
];

export default function PhotoGallery() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="gallery-container">
            <h3 className="section-title text-gold font-heading text-center">Precious Memories</h3>

            <div className="slider-wrapper">
                <button className="slider-btn left" onClick={prevSlide}>
                    <ChevronLeft size={24} />
                </button>

                <div className="image-container">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={images[index]}
                            alt={`Memory ${index + 1}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="gallery-image"
                        />
                    </AnimatePresence>
                </div>

                <button className="slider-btn right" onClick={nextSlide}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="dots-container">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
