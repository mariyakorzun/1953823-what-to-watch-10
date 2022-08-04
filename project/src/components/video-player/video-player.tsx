import { useEffect, useRef } from 'react';

 type VideoPlayerProps = {
   isPlaying: boolean;
   src: string;
   poster: string;
 }

function VideoPlayer({isPlaying, src, poster }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {videoRef.current?.play();
      }, 1000);
    }
    else {
      videoRef.current?.pause();
      videoRef.current?.load();
    }

    return () => clearTimeout(timer);
  });

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
