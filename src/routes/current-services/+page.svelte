<script lang="ts">
    import BrandBlock from "../components/brand-block.svelte";
    import * as m from "$lib/paraglide/messages";
    import ServiceCard from "./components/service-card.svelte";

    const currentServices = [
        {
            src: "/images/services/1.png",
            alt: "Service 1",
            summary: m.current_service_aml_summary(),
            videoHref: "https://youtube.com/shorts/m0hX7tDmOio?feature=share",
        },
        {
            src: "/images/services/2.png",
            alt: "Service 2",
            summary: m.current_service_health_at_home(),
            videoHref: "https://youtube.com/shorts/VO13UYaToWo?feature=share",
        },
        {
            src: "/images/services/3.png",
            alt: "Service 3",
            summary: m.current_service_upfunding(),
        },
    ];
</script>

<div class="w-full flex flex-col">
    <BrandBlock />

    <div
        class="w-full py-6 flex flex-col md:flex-row justify-center items-center gap-4"
    >
        <h1
            class="text-nunito-sans font-extrabold text-4xl md:text-6xl text-center md:text-left"
            style="color: rgb(0, 74, 173)"
        >
            {m.current_services_title()}
        </h1>
        <h3
            class="text-nunito-sans font-bold text-xl md:text-3xl"
            style="color: rgb(0, 74, 173)"
        >
            {m.current_services_description()}
        </h3>
    </div>

    <div
        class="px-4 md:px-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-4 align-center"
    >
        {#each currentServices as service}
            <ServiceCard
                src={service.src}
                alt={service.alt}
                summary={service.summary}
                videoHref={service.videoHref}
            />
        {/each}
    </div>
</div>
