<script lang="ts">
    import "../app.css";
    import { ModeWatcher, setMode } from "mode-watcher";
    import { Toaster } from "$lib/components/ui/sonner/index";
    import NavMain from "./components/nav-main.svelte";
    import { setLocale } from "@/paraglide/runtime";

    export const trailingSlash = "always";
    export const prerender = true;

    setMode("light");
    setLocale("es");

    const { children } = $props();
</script>

<ModeWatcher />
<Toaster />
<div class="h-svh w-full flex flex-col">
    <NavMain />
    <div class="flex-1">
        {@render children()}
    </div>
</div>
