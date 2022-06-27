import axios from "axios";
import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import "./VideoPlayer_Style.scss";
import video from "../../assets/Video.mp4";

const VideoPlayer: FC = () => {
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [isPausedVideo, setIsPausedVideo] = useState<boolean>(false);

  //   console.log(videoRef.current.paused);

  const tooglePlay = () => {
    videoRef?.current.paused
      ? (() => {
          setIsPausedVideo(true);
          videoRef.current.play();
        })()
      : (() => {
          setIsPausedVideo(false);
          videoRef.current.pause();
        })();
  };

  const onKeyDown = (event: any) => {
    const keyEvent: any = event?.key.toLowerCase();

    switch (keyEvent) {
      case "k":
        tooglePlay();
        break;
    }
    return;
  };
  return (
    <div
      className="video_container_wrapper"
      onKeyDown={(event) => onKeyDown(event)}
    >
      <div
        className={isPausedVideo ? "video_container paused" : "video_container"}
        onClick={() => tooglePlay()}
      >
        <div className="video_controls_container">
          <div className="timeline_container"></div>
          <div className="controls">
            <button className="play_pause_btn">
              <svg className="play_icon" viewBox="0 0 24 24">
                <path fill="white" d="M8,5.14V19.14L19,12.14L8,5.142"></path>
              </svg>
              <svg className="pause_icon" viewBox="0 0 24 24">
                <path fill="white" d="M14,19H18V5H14M6,19H10V5H6V19Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <video ref={videoRef} className="video" src={video}></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
