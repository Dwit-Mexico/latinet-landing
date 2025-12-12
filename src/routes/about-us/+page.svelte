<script lang="ts">
    import * as m from "$lib/paraglide/messages";
    import AboutUsCard from "./components/about-us-card.svelte";

    const rows = [
        {
            src: "/images/work-team.png",
            alt: "Work Team",
            title: m.about_us_work_team_title(),
            description: m.about_us_work_team_description(),
        },
        {
            src: "/images/finantial-solutions.png",
            alt: "Work Team",
            title: m.about_us_financial_solutions_title(),
            description: m.about_us_financial_solutions_description(),
        },
    ];
</script>

<div class="h-full w-full flex justify-center items-center">
    <div class="p-10 grid grid-cols-1 md:grid-cols-3 transform -translate-y-7">
        <div class="flex flex-col justify-start gap-2 md:h-full">
            <div class="h-32 w-[320px]">
                <img
                    src="/images/logos/about-us.png"
                    alt="latinet logo"
                    class="h-full object-cover"
                />
            </div>
            <div class="flex-1 w-[320px]">
                <img src="/images/arrows.png" alt="latinet logo" class="" />
            </div>
        </div>

        <div class="flex flex-col gap-4 col-span-2">
            {#each rows as row}
                <AboutUsCard
                    src={row.src}
                    alt={row.alt}
                    title={row.title}
                    description={row.description}
                />
            {/each}
        </div>
    </div>
</div>
