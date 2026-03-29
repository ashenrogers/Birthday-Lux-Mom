import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import backgroundMusic from './components/Happy Birthday (Background Score).mp3';
import './index.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  // Attempt to play music on the first user interaction anywhere on the screen
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted.current && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          hasInteracted.current = true;
          // Remove listeners once audio successfully starts playing
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
        }).catch((err) => {
          console.log("Browser blocked autoplay:", err);
        });
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const navToScreen2 = () => setCurrentScreen(2);
  const navToScreen1 = () => setCurrentScreen(1);

  return (
    <div className="app-container">
      {/* Background Music Audio Element */}
      <audio
        ref={audioRef}
        loop
        src={backgroundMusic}
      />

      {/* Floating Music Toggle */}
      <button
        onClick={toggleMusic}
        className="music-toggle"
        aria-label="Toggle background music"
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </button>

      <AnimatePresence mode="wait">
        {currentScreen === 1 && (
          <Screen1 key="screen1" onNext={navToScreen2} />
        )}
        {currentScreen === 2 && (
          <Screen2 key="screen2" onBack={navToScreen1} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
