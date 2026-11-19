import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Jorge Luis Rodrigues Silva",
    role: "Founder of D-libre",
    videoUrl: "https://youtube.com/shorts/hiXjX-jTRwo?si=gwBsXDQzO7PKBrp4",
    // Optional: add a crisp local/imported image path if you prefer custom cover art
    thumbnail: "",
  },
  {
    id: 2,
    name: "Jovish",
    role: "Founder of Action Club",
    videoUrl: "https://youtube.com/shorts/YDt5E48iZmk?si=hDvc_UIU4Upjdf7X",
    thumbnail: "",
  },
  {
    id: 3,
    name: "Minnu Benny",
    role: "Founder of Imprints Academy",
    videoUrl: "https://youtube.com/shorts/cdD69NQAilo?si=WsNHRJ9Ii_sr8Qya",
    thumbnail: "",
  },
];

function extractYouTubeId(url) {
  if (!url) return "";
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }
  return "";
}

function StoryThumbnail({ item, isCenter }) {
  const videoId = extractYouTubeId(item.videoUrl);
  const candidates = item.thumbnail
    ? [item.thumbnail]
    : videoId
      ? [
          `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        ]
      : [];

  const [srcIndex, setSrcIndex] = useState(0);

  useEffect(() => {
    setSrcIndex(0);
  }, [item.videoUrl, item.thumbnail]);

  const currentSrc = candidates[srcIndex] || "";
  const isFallbackLowRes =
    !item.thumbnail && currentSrc.includes("hqdefault.jpg");

  if (!currentSrc) return null;

  return (
    <img
      src={currentSrc}
      alt={`${item.name} — ${item.role}`}
      onError={() => {
        if (srcIndex < candidates.length - 1) {
          setSrcIndex((prev) => prev + 1);
        }
      }}
      className={`w-full h-full object-cover transition-all duration-500 ${
        isFallbackLowRes ? "scale-[1.28]" : "scale-100"
      } ${isCenter ? "" : "grayscale contrast-105"}`}
    />
  );
}

function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [playingStory, setPlayingStory] = useState(null);

  const total = stories.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const visibleCards = [
    { item: stories[prevIndex], position: "left", index: prevIndex },
    { item: stories[activeIndex], position: "center", index: activeIndex },
    { item: stories[nextIndex], position: "right", index: nextIndex },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1198px] mx-auto px-6 md:px-10 lg:px-[88px]">
        {/* SECTION HEADING */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-['Sora'] text-[10px] md:text-[11px] tracking-[4px] text-[#A49AAE] uppercase mb-3">
            CUSTOMER STORIES
          </p>

          <h2 className="font-['Sora'] font-bold text-[25px] md:text-[34px] leading-[1.2] text-[#191919]">
            Real Stories. Better Service{" "}
            <span className="text-[#8624DD]">Experiences.</span>
          </h2>

          <p className="font-['Sora'] text-[11px] md:text-[13px] leading-[21px] text-[#77717D] max-w-[540px] mx-auto mt-3">
            See how home service businesses simplify bookings, manage teams, and
            deliver better customer experiences with Homier.
          </p>
        </div>

        {/* CAROUSEL CARDS */}
        <div className="relative flex items-center justify-center gap-6 md:gap-10 min-h-[420px] md:min-h-[480px]">
          {visibleCards.map(({ item, position, index }) => {
            const isCenter = position === "center";
            const isLeft = position === "left";
            const videoId = extractYouTubeId(item.videoUrl);

            return (
              <div
                key={`${item.id}-${position}`}
                onClick={() => {
                  if (isCenter) {
                    setPlayingStory({ ...item, videoId });
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className={`relative cursor-pointer select-none rounded-[20px] overflow-hidden transition-all duration-500 ${
                  isCenter
                    ? "w-[260px] sm:w-[290px] md:w-[310px] h-[410px] sm:h-[450px] md:h-[480px] z-20 scale-100 shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
                    : `hidden sm:block w-[210px] md:w-[235px] h-[330px] md:h-[370px] z-10 opacity-90 hover:opacity-100 ${
                        isLeft ? "-rotate-3" : "rotate-3"
                      }`
                }`}
              >
                {/* YOUTUBE THUMBNAIL WITH HIGH-RES FALLBACK */}
                <StoryThumbnail item={item} isCenter={isCenter} />

                {/* PURPLE WASH OVERLAY ON SIDE CARDS */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-[#9B51E0]/35 mix-blend-multiply pointer-events-none" />
                )}

                {/* BOTTOM GRADIENT FOR CAPTION READABILITY */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none"
                />

                {/* PLAY BUTTON */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:scale-110 ${
                    isCenter
                      ? "bottom-[82px] w-[50px] h-[50px] bg-white text-[#14A38B]"
                      : "bottom-[58px] w-[42px] h-[42px] bg-white/75 text-[#8624DD]"
                  }`}
                >
                  <Play
                    size={isCenter ? 20 : 16}
                    className="fill-current ml-0.5"
                  />
                </div>

                {/* SPEAKER CAPTION */}
                <div className="absolute inset-x-0 bottom-4 px-4 text-left text-white pointer-events-none">
                  <p className="font-['Sora'] font-semibold text-[13px] leading-tight">
                    {item.name}
                  </p>
                  <p className="font-['Sora'] text-[10px] text-white/80 mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {stories.map((story, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-7 bg-[#8624DD]"
                    : "w-[6px] bg-[#E2D9EC] hover:bg-[#C3B1D8]"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* VERTICAL YOUTUBE SHORTS LIGHTBOX MODAL */}
      {playingStory?.videoId && (
        <div
          onClick={() => setPlayingStory(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[380px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setPlayingStory(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/65 text-white flex items-center justify-center hover:bg-black cursor-pointer"
            >
              <X size={18} />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${playingStory.videoId}?autoplay=1&rel=0&vq=hd1080`}
              title={`${playingStory.name} — ${playingStory.role}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default CustomerStories;