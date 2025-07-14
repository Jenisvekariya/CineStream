
export function DynamicBackground() {
    return (
        <>
            <div className="absolute inset-0 z-0 h-full w-full bg-black">
                <video
                    src="https://videos.pexels.com/video-files/853826/853826-hd_1920_1080_25fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-30"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </>
    );
}
