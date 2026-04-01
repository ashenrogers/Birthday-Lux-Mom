import { motion } from 'framer-motion';
import { Sparkles, CalendarHeart, ArrowRight } from 'lucide-react';
import './Screen1.css';

export default function Screen1({ onNext }) {
    // Floating animation variants
    const floatVariant = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <motion.div
            className="screen1-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            {/* Decorative background overlay */}
            <div className="overlay"></div>

            <motion.div
                className="content-wrapper"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={fadeUp} className="photo-frame">
                    <img
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=300&h=300"
                        alt="Mom's 60th"
                        className="mom-photo"
                    />
                    <motion.div variants={floatVariant} initial="initial" animate="animate" className="sparkle left">
                        <Sparkles color="#d4af37" size={32} />
                    </motion.div>
                    <motion.div variants={floatVariant} initial="initial" animate="animate" className="sparkle right" style={{ animationDelay: '1s' }}>
                        <Sparkles color="#d4af37" size={24} />
                    </motion.div>
                </motion.div>

                <motion.h1 variants={fadeUp} className="main-title text-gold">
                    You're Invited to Celebrate<br />Amma's 60th Birthday
                </motion.h1>

                <motion.p variants={fadeUp} className="subtext">
                    Join us for a joyful evening filled with love, laughter, and celebration.
                </motion.p>

                <motion.div variants={fadeUp} className="event-highlights bg-cream">
                    <div className="highlight-item">
                        <span className="emoji">🎂</span>
                        <span>Cake Cutting Ceremony</span>
                    </div>
                    <div className="highlight-item">
                        <span className="emoji">🍽️</span>
                        <span>Followed by Dinner</span>
                    </div>
                </motion.div>

                <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="btn-primary cta-btn"
                >
                    View Invitation Details <ArrowRight size={20} />
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
