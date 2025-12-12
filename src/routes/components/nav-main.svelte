<script lang="ts">
    import * as m from "$lib/paraglide/messages";
    import { localizeHref } from "@/paraglide/runtime";
    import Icon from "@iconify/svelte";

    let isOpen = false;

    const menu = [
        { label: m.menu_home(), href: "/" },
        { label: m.menu_current_services(), href: "/current-services" },
        { label: m.menu_about_us(), href: "/about-us" },
        { label: m.menu_comming_soon(), href: "/coming-soon" },
        { label: m.menu_shops_and_businesses(), href: "/shops-and-businesses" },
        { label: m.menu_ambassadors(), href: "/ambassadors" },
    ];

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function closeMenu() {
        isOpen = false;
    }
</script>

<div class="w-full flex justify-end px-2">
    <nav class="flex w-full justify-end md:justify-between items-center py-1">
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center">
            {#each menu as item}
                <a
                    href={localizeHref(item.href)}
                    class="text-gray-700 hover:text-gray-900 px-4 py-2"
                    on:click={closeMenu}
                >
                    {item.label}
                </a>
            {/each}
        </div>

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden p-2 rounded-md text-gray-700"
            aria-label="Toggle navigation menu"
            on:click={toggleMenu}
        >
            {#if !isOpen}
                <Icon icon="lucide:menu" width="24" height="24" />
            {:else}
                <Icon icon="lucide:x" width="24" height="24" />
            {/if}
        </button>

        <!-- Mobile Menu Overlay -->
        {#if isOpen}
            <button
                class="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden"
                on:click={closeMenu}
            >
                <div class="ml-auto w-3/4 h-full bg-white shadow-lg">
                    <div class="flex flex-col p-4">
                        {#each menu as item}
                            <a
                                href={localizeHref(item.href)}
                                class="text-gray-700 hover:bg-gray-100 px-4 py-3 border-b border-gray-200 block"
                                on:click={closeMenu}
                            >
                                {item.label}
                            </a>
                        {/each}
                    </div>
                </div>
            </button>
        {/if}
    </nav>
</div>
