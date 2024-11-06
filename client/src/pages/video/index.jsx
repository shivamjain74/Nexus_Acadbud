import React from "react";
import myVideo from "../../assets/Nexus Acadbud Reel.mp4"; // Replace with the actual path to your video
import ShoppingHeader from "../../components/shopping-view/header";

function FullScreenVideo() {
  return (
    <>
    <ShoppingHeader/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
      <video 
        src={myVideo}
        autoPlay
        loop
        muted
        controls
        className="w-full h-auto rounded-md"
      />
    </div>
  </div>
  </>
  );
}

export default FullScreenVideo;
