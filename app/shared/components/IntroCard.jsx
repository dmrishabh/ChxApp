import { useState, useRef } from "react";
import { MediaCard } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
export default function IntoCard(props) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoHover = () => {
    if (props.imageSource) return;
    const video = videoRef.current;
    setIsVideoPlaying(!isVideoPlaying);

    if (!isVideoPlaying) { 
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div onMouseEnter={handleVideoHover} onMouseLeave={handleVideoHover}>
      <MediaCard
        portrait
        title={props.title}
        description={props.description}
        primaryAction={{
          content: props.buttonText,
          onAction: () => {
            navigate(`${props.path}`);
          },
          outline: true,
        }}
      >
        {props.videoSource && (
          <video
            ref={videoRef}
            muted
            style={{ width: "100%" }}
            src={props.videoSource}
          />
        )}
        {props.imageSource && (
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={props.imageSource}
          />
        )}
      </MediaCard>
    </div>
  );
}
