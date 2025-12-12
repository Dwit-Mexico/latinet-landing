<script lang="ts">
    const {
        src,
        alt,
        title,
        description,
    }: { src: string; alt: string; title: string; description: string } =
        $props();
</script>

<div
    class="w-full flex px-6 py-2 justify-between gap-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
>
    <div class="min-w-48 w-[241px]">
        <img
            {src}
            {alt}
            class="object-cover w-full rounded-xl h-64 md:h-auto md:w-48 mb-4 md:mb-0"
        />
    </div>

    <div class="flex flex-col md:p-4 leading-normal uppercase">
        <h2 class=" font-bold tracking-tight">
            {title}
        </h2>
        <p class="text-justify text-wrap text-sm">
            {description}
        </p>
    </div>
</div>
