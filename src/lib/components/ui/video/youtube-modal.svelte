<script lang="ts">
    import { getYoutubeModal } from "$lib/stores/youtube-modal-store.svelte";
    import { fade, fly } from "svelte/transition";

    const modal = getYoutubeModal();

    function handleBackdrop(e: MouseEvent) {
        if (e.target === e.currentTarget) modal.close();
    }
</script>

<svelte:window onkeydown={(e) => e.key === "Escape" && modal.close()} />

{#if modal.isOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85"
        transition:fade={{ duration: 200 }}
        onclick={handleBackdrop}
        role="button"
        tabindex="-1"
    >
        <div
            class="relative w-full max-w-7xl"
            transition:fly={{ y: 20, duration: 300 }}
        >
            <button
                class="absolute -top-10 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                onclick={modal.close}
                aria-label="Cerrar modal"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <div
                class="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
                <iframe
                    class="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/{modal.videoId}?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
{/if}
