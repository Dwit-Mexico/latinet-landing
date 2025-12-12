<script lang="ts">
    import BrandBlock from "../components/brand-block.svelte";
    import BenefitsCard from "./components/benefits-card.svelte";
</script>

<div class="w-full flex flex-col gap-[0.5px]">
    <BrandBlock />
    <div class="max-h-72 w-full flex justify-center overflow-hidden">
        <div class="max-w-[1000px] transform -translate-y-10">
            <img
                src="/images/shops-and-businesses.jpg"
                alt="shops and businesses"
                class="object-cover object-top"
            />
        </div>
    </div>

    <div class="w-full flex justify-center items-center">
        <div
            class="flex transform sm:-translate-x-5 md:-translate-x-30 -translate-y-14"
        >
            <BenefitsCard />
        </div>
    </div>
</div>
