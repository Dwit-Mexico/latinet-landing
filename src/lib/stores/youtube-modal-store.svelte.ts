import { getContext, setContext } from "svelte";

const YOUTUBE_MODAL_KEY = Symbol("youtube-modal");

export function createYoutubeModal() {
  let isOpen = $state(false);
  let videoId = $state("");

  return {
    get isOpen() {
      return isOpen;
    },
    get videoId() {
      return videoId;
    },

    open(url: string) {
      videoId = extractVideoId(url);
      isOpen = true;
      document.body.style.overflow = "hidden";
    },

    close() {
      isOpen = false;
      videoId = "";
      document.body.style.overflow = "";
    },
  };
}

function extractVideoId(url: string): string {
  if (!url) return "";

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return url;
}

export function setYoutubeModal() {
  return setContext(YOUTUBE_MODAL_KEY, createYoutubeModal());
}

export function getYoutubeModal() {
  return getContext<ReturnType<typeof createYoutubeModal>>(YOUTUBE_MODAL_KEY);
}
