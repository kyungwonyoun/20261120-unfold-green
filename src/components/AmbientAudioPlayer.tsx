import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AUDIO_SRC = '/assets/aistudio/Glass_and_Greenery_1c0b0027.mp3';

export function AmbientAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    let interactionListenerAttached = false;

    const removeInteractionListeners = () => {
      if (!interactionListenerAttached) return;
      interactionListenerAttached = false;
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    function handleFirstInteraction(event: Event) {
      if (userPausedRef.current) {
        removeInteractionListeners();
        return;
      }
      if (
        buttonRef.current &&
        event.target instanceof Node &&
        buttonRef.current.contains(event.target)
      ) {
        removeInteractionListeners();
        return;
      }

      audio
        ?.play()
        .then(() => {
          removeInteractionListeners();
        })
        .catch(() => {
          // Keep waiting if interaction did not unlock audio
        });
    }

    // Attempt immediate autoplay on initial page open
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Browser blocked unmuted autoplay prior to user gesture:
        // resume smoothly on the visitor's first interaction anywhere
        if (!userPausedRef.current) {
          interactionListenerAttached = true;
          window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
          window.addEventListener('keydown', handleFirstInteraction, { passive: true });
        }
      });

    return () => {
      removeInteractionListeners();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      userPausedRef.current = false;
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      userPausedRef.current = true;
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />

      <button
        ref={buttonRef}
        type="button"
        onClick={toggleAudio}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '배경 음악 끄기' : '배경 음악 켜기'}
        title={isPlaying ? '배경 음악 끄기' : '배경 음악 켜기'}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 h-10 px-3 rounded-sm inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.06em] bg-[#F7F8F6]/65 backdrop-blur-md border border-[#383515]/15 text-[#383515]/85 hover:bg-[#F7F8F6]/90 hover:text-[#383515] hover:border-[#778732]/40 shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#778732]"
      >
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#778732]" strokeWidth={1.75} />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#6B6665]" strokeWidth={1.75} />
        )}
        <span>{isPlaying ? 'ON' : 'OFF'}</span>
      </button>
    </>
  );
}
