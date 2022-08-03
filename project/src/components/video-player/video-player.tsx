import { useEffect, useRef } from 'react';

 type VideoPlayerProps = {
   isPlaying: boolean;
   src: string;
   poster: string;
 }

function VideoPlayer({isPlaying, src, poster }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideoTimeout = () => {
      videoRef.current && videoRef.current.play();
    };
    const timer = setTimeout(() => playVideoTimeout, 1000);
    if (videoRef.current === null) {
      return clearTimeout(timer);
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      src={src}
      poster={poster}
      muted
      loop
      ref={videoRef}
      width="280"
      height="175"
    />
  );
}

export default VideoPlayer;
