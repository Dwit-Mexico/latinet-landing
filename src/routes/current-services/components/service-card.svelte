<script lang="ts">
    import Icon from "@iconify/svelte";
    import * as m from "$lib/paraglide/messages";
    import { getYoutubeModal } from "$lib/stores/youtube-modal-store.svelte";

    const modal = getYoutubeModal();

    const {
        src,
        alt,
        summary,
        videoHref,
    }: { src: string; alt: string; summary: string; videoHref?: string } =
        $props();

    function handleOpenVideo() {
        if (!videoHref) return;
        modal.open(videoHref);
    }
</script>

<div
    class="w-full flex px-6 py-2 flex-col justify-between gap-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
>
    <div class="flex flex-col gap-2">
        <div class="h-40 w-full flex justify-center rounded-xl overflow-hidden">
            <img {src} {alt} class="w-full h-auto object-cover" />
        </div>

        <div>
            <p class="text-blue-700">
                {summary}
            </p>
        </div>
    </div>

    {#if videoHref}
        <div class="w-full flex justify-center">
            <button
                onclick={handleOpenVideo}
                class="w-fit flex flex-col justify-center items-center"
            >
                <Icon
                    icon="bi:play-btn-fill"
                    class="size-20 md:size-28 text-blue-900"
                />
                <span
                    class="text-blue-700 rounded-md text-md md:text-[22px] transform -translate-y-2 md:-translate-y-4"
                >
                    {m.label_play_video()}
                </span>
            </button>
        </div>
    {:else}
        <div></div>
    {/if}
</div>
