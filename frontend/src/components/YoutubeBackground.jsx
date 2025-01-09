import React from 'react';
import ReactPlayer from 'react-player';

const YouTubeBackground = () => {
    return (
        <div className="relative w-full h-64 md:h-96" >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=yR6tVxgDWLk"
                playing={true}
                controls={false}
                mute={true}
                loop={true}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default YouTubeBackground;
