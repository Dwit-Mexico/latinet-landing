<script>
    import * as m from "$lib/paraglide/messages";
    import Icon from "@iconify/svelte";
    import BrandBlock from "../components/brand-block.svelte";

    const paragraphs = [
        m.ambassadors_paragraph_1(),
        m.ambassadors_paragraph_2(),
        m.ambassadors_paragraph_3(),
        m.ambassadors_paragraph_4(),
        m.ambassadors_paragraph_5(),
    ];
</script>

<div>
    <BrandBlock />
    <div class="relative w-full flex justify-center">
        <img
            src="/images/old-people.png"
            alt="old people"
            class="min-h-72 object-cover"
        />
        <div
            class="absolute bottom-0 flex w-full justify-end md:justify-center"
        >
            <div class="w-fit px-8 py-2 bg-black/50">
                <span class=" text-white text-3xl">
                    {m.ambassadors_title()}
                </span>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5">
        <div></div>
        <div class="col-span-3 p-4 flex flex-col gap-4 bg-black/10">
            <h1>{m.ambassadors_info()}</h1>
            <div class="flex flex-col gap-2 px-4">
                {#each paragraphs as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </div>
        </div>
        <div class="w-full flex justify-center">
            <a
                href="https://youtu.be/7o0dRoIuYdg"
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
</div>
