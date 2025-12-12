<script lang="ts">
    import * as m from "$lib/paraglide/messages";
    import Icon from "@iconify/svelte";
    import { getYoutubeModal } from "$lib/stores/youtube-modal-store.svelte";

    const modal = getYoutubeModal();

    function handleOpenVideo() {
        modal.open("https://youtu.be/frc2dvd5J6U");
    }
</script>

<div class="relative h-[64svh] md:h-full flex items-center">
    <video
        class="w-full h-full h-min-[420px] md:h-[630px] object-cover md:object-fill pointer-events-none"
        autoplay
        loop
        muted
        playsinline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        oncontextmenu={() => {}}
    >
        <track
            kind="captions"
            src="/captions.vtt"
            srclang="en"
            label="English"
        />
        <source src="/home.mp4" type="video/mp4" />
    </video>
    <div
        class="absolute px-2 md:px-10 top-1/2 md:top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-4 md:flex-row"
    >
        <div class="flex flex-col items-center md:items-start">
            <h1
                class="text-white text-5xl md:text-7xl font-black text-nunito-sans text-center md:text-left"
            >
                {m.home_banner_title()}
            </h1>
            <p
                class="text-white text-xl font-medium text-center md:text-2xl md:text-left"
            >
                {m.home_banner_description()}
            </p>
        </div>
        <div class="flex-1 flex justify-center items-center">
            <button
                onclick={handleOpenVideo}
                class="w-fit flex flex-col justify-center items-center"
            >
                <Icon
                    icon="bi:play-btn-fill"
                    class="size-20 md:size-28 text-white"
                />
                <span
                    class="text-white rounded-md text-md md:text-2xl transform -translate-y-2 md:-translate-y-4"
                >
                    {m.label_play_video()}
                </span>
            </button>
        </div>
    </div>
</div>
