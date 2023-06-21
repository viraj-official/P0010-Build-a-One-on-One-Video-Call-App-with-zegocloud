import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const elementRef = useRef(null);

  useEffect(() => {

    const myMeeting = async (element) => {
      const appID = 983408834;
      const serverSecret = "c5e1802a413218ce73678c6c2e7a47dd";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Name"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Copy link",
            url: `https://responsive-navbar-93ca7.web.app/room/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    myMeeting(elementRef.current);
  }, [roomId]);

  return (
    <div className="room-page">
      <div ref={elementRef} />
    </div>
  );
};

export default RoomPage;
