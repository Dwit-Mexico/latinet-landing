<script lang="ts">
    import "../app.css";
    import { ModeWatcher, setMode } from "mode-watcher";
    import { Toaster } from "$lib/components/ui/sonner/index";
    import NavMain from "./components/nav-main.svelte";
    import { setLocale } from "@/paraglide/runtime";
    import YoutubeModal from "@/components/ui/video/youtube-modal.svelte";
    import { setYoutubeModal } from "@/stores/youtube-modal-store.svelte";

    export const trailingSlash = "always";
    export const prerender = true;

    setYoutubeModal();
    setMode("light");
    setLocale("es");

    const { children } = $props();
</script>

<ModeWatcher />
<Toaster />
<YoutubeModal />
<div class="h-svh w-full flex flex-col overflow-hidden">
    <NavMain />
    <div class="flex-1 overflow-auto">
        {@render children()}
    </div>
</div>
