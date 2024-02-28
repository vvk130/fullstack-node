import "./css/HeaderVideo.css";

const HeaderVideo = () => {
  return (
    <div className="header-video-container">
      <p>MID SEASON SALE, NOW 20% OFF</p>
      <video loop autoPlay muted id="bg-video">
        <source
          src="https://trend-flare.onrender.com/assets/women_video_header.mp4"
          alt="Woman dancing and wearing a blazer"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HeaderVideo;
