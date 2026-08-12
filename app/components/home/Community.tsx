"use client";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

type VideoState = {
  [key: number]: boolean; // key: video index, value: isPlaying
};

export default function Community() {
    const [playingStates, setPlayingStates] = useState<VideoState>({});
    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    const videoList = [
        {name: 'Video 1',link: '/videos/v1.mp4'},
        {name: 'Video 2',link: '/videos/v2.mp4'},
        {name: 'Video 3',link: '/videos/v3.mp4'},
        {name: 'Video 4',link: '/videos/v4.mp4'},
        {name: 'Video 5',link: '/videos/v1.mp4'},
        {name: 'Video 6',link: '/videos/v2.mp4'},
        {name: 'Video 7',link: '/videos/v3.mp4'},
        {name: 'Video 8',link: '/videos/v4.mp4'},
    ]

const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (playingStates[index]) {
        video.pause();

        setPlayingStates(prev => ({
            ...prev,
            [index]: false
        }));
    } else {
        video.play();

        setPlayingStates(prev => ({
            ...prev,
            [index]: true
        }));
    }
};

    return(
        <div className="min-w-0 pt-10 md:pt-15 lg:pt-25 px-6 md:px-8 lg:px-10 relative overflow-hidden">
            <div className="container flex flex-col lg:flex-row gap-3 items-center justify-between">
                <p className="text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] font-secondary tracking-tight leading-[1.13]">As Seen On<span className="italic font-primary pl-1">Community</span></p>
                <p className="text-[16px] font-secondary tracking-tight leading-[1.40] max-w-xs text-center lg:text-right text-neutral-600">Discover how Lustrõ is styled and celebrated by our global community</p>
            </div>
            <div className="flex gap-4 mt-6 sm:mt-8 lg:mt-10 min-w-0 overflow-x-auto snap-x snap-mandatory no-scrollbar animate-video-scroll scrollbar-hide">
                {videoList.map((video, index)=>(
                    <div key={index} className="relative
                        flex-shrink-0
                        w-[280px]
                        h-[500px]
                        max-w-[320px]
                        max-h-[560px]
                        snap-center
                        rounded-sm
                        overflow-hidden
                        transition-all
                        duration-300
                        group
                        hover:shadow-2xl
                        hover:-translate-y-4
                        hover:scale-105">
                        <video
                            ref={(el) => {
                                if (el) videoRefs.current[index] = el;
                            }}
                            src={video.link}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            onEnded={() =>
                                setPlayingStates(prev => ({
                                    ...prev,
                                    [index]: false
                                }))
                            }
                        />
                        <p className="absolute left-4 bottom-4 text-start text-lg text-white">{video.name}</p>
                        
                        {/* Play/Stop Buttons */}
                        <div className="absolute inset-0 items-center justify-center flex gap-2">
                            <button
                                onClick={() => toggleVideo(index)}
                                className="
                                    p-6
                                    rounded-full
                                    bg-white/20
                                    backdrop-blur-sm
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                "
                            >
                                {
                                    playingStates[index] ? (
                                        <Pause 
                                            className="w-8 h-8 text-white fill-white"
                                        />
                                    ) : (
                                        <Play 
                                            className="w-8 h-8 text-white fill-white"
                                        />
                                    )
                                }
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}