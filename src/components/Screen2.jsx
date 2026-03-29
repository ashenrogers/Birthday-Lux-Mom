import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock, Phone, Mail, ArrowLeft, Heart } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import PhotoGallery from './PhotoGallery';
import './Screen2.css';
import { BsWhatsapp } from 'react-icons/bs';

export default function Screen2({ onBack }) {
    const eventDate = "2026-04-05T19:00:00";

    const googleCalendarUrl = "https://calendar.google.com/calendar/r/eventedit?text=Mom%27s+60th+Birthday+Celebration&dates=20260405T190000/20260405T230000&details=Join+us+for+a+joyful+celebration!&location=Our+Home";
    const googleMapsUrl = "https://maps.app.goo.gl/FjFGDzZbHsuN2E8N9";

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <motion.div
            className="screen2-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <button onClick={onBack} className="btn-back" aria-label="Go Back">
                <ArrowLeft size={24} />
            </button>

            <motion.div
                className="details-wrapper"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={fadeUp} className="header-section text-center">
                    <h2 className="section-title text-gold font-heading">Mom's 60th<br />Birthday Celebration</h2>

                    <div className="profile-section">
                        <div className="profile-frame">
                            <img
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=300&h=300"
                                alt="Mom"
                                className="profile-photo"
                            />
                        </div>
                        <h3 className="profile-name font-heading text-gold">Celebrating Our Wonderful Mom</h3>
                    </div>

                    <div className="divider"></div>
                </motion.div>

                {/* Event Information */}
                <motion.section variants={fadeUp} className="info-section">
                    <div className="info-card">
                        <CalendarDays className="info-icon text-gold" />
                        <h3>Date</h3>
                        <p>Saturday, April 05, 2026</p>
                    </div>
                    <div className="info-card">
                        <Clock className="info-icon text-gold" />
                        <h3>Time</h3>
                        <p>Cake Cutting: 07:00 PM<br />Dinner: 8:00 PM</p>
                    </div>
                </motion.section>

                {/* Countdown */}
                <motion.section variants={fadeUp} className="countdown-section text-center">
                    <p className="countdown-title">The celebration begins in:</p>
                    <CountdownTimer targetDate={eventDate} />
                </motion.section>

                {/* Map and Calendar integration */}
                <motion.section variants={fadeUp} className="venue-section">
                    <div className="venue-details">
                        <MapPin className="info-icon text-gold" />
                        <h3>Venue</h3>
                        <p className="venue-name">Our Home</p>
                        <p className="venue-address">We can't wait to celebrate with you!</p>

                        <div className="actions">
                            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                                Get Directions
                            </a>
                            <a href={googleCalendarUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                                Add to Calendar
                            </a>
                        </div>
                    </div>

                    <div className="map-preview">
                        <iframe
                            src="https://maps.google.com/maps?q=VASANTHAGAM,+Vavuniya,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '300px', borderRadius: '15px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Interactive Map to Vasanthagam"
                        ></iframe>
                    </div>
                </motion.section>

                {/* Photo Gallery */}
                <motion.section variants={fadeUp} className="gallery-section">
                    <PhotoGallery />
                </motion.section>

                {/* RSVP and Special Note */}
                <motion.section variants={fadeUp} className="footer-section text-center bg-cream">
                    <h3 className="rsvp-title font-heading text-gold">Contact</h3>
                    <p className="rsvp-contact">
                        <Phone size={18} /> +94 (076) 430 4845 <br />

                        <BsWhatsapp size={18} /> +94 (076) 430 4845
                    </p>
                    <p className="special-note">
                        "Your presence is the best gift we could ask for <Heart size={18} className="text-blush inline-icon" fill="currentColor" />"
                    </p>
                </motion.section>

            </motion.div>
        </motion.div>
    );
}
