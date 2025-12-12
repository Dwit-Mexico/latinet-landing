<script lang="ts">
    import * as m from "$lib/paraglide/messages";
    import Icon from "@iconify/svelte";
</script>

<div
    class="w-full max-w-xl flex flex-col md:flex-row px-6 py-2 gap-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
>
    <div class="min-w-72 w-72 rounded-xl overflow-hidden">
        <div class="w-72">
            <img
                src="/images/shops-and-businesses-card.png"
                alt="shops and businesses"
                class="object-cover w-72"
            />
        </div>
    </div>

    <div class="w-full flex flex-col gap-2">
        <h3 class="text-xl md:text-2xl">
            {m.shops_and_businesses_title()}
        </h3>
        <a
            href="https://youtu.be/2g3ARDQgFmg"
            target="_blank"
            class="w-fit flex flex-col justify-center items-center"
        >
            <Icon
                icon="bi:play-btn-fill"
                class="size-20 md:size-24 text-blue-900"
            />
            <button
                class="text-blue-700 rounded-md text-md md:text-[22px] transform -translate-y-2 md:-translate-y-4"
            >
                {m.label_play_video()}
            </button>
        </a>
    </div>
</div>
