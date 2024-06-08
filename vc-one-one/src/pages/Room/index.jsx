import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            const appId = 1175447220;
            const serverSecret = "e5a9bf74965e6ec9659a9975372366e6";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                roomId,
                Date.now().toString(),
                "MindFulHaven"
            );
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: meetingRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: false,
            });
        };

        myMeeting();
    }, [roomId]);

    return (
        <div>
            <div ref={meetingRef} style={{ width: '100%', height: '100vh' }} />
        </div>
    );
};

export default RoomPage;
