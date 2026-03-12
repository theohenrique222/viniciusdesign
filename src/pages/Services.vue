<template>
    <section class="bg-black text-white">

        <div class="flex text-center items-center rounded-2xl p-10">
            <div class="w-full h-0.5 bg-neutral-800"></div>
            <p class="w-full text-neutral-300">Lorem ipsum dolor sit amet consectetur </p>
            <div class="w-full h-0.5 bg-neutral-800"></div>
        </div>


        <div class="bg-white py-10 overflow-hidden">
            <div class="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] gap-32">

                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" class="h-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" class="h-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" class="h-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" class="h-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" class="h-10">

            </div>
        </div>


        <div class="container mx-auto grid lg:grid-cols-3 gap-10 px-10 pt-5">

            <div class="h-52 border bg-cover bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-1.jpg')] border-neutral-800 hover:border-orange-400 transition">
                <div class="bg-neutral-950 w-full text-center">
                    <h3 class="text-2xl font-bold mb-4">Web Design</h3>
                    <p class="text-gray-400">
                        Modern UI/UX design for brands.
                    </p>
                </div>

            </div>

            <div class="p-10 border border-neutral-800 hover:border-orange-400 transition">
                <h3 class="text-2xl font-bold mb-4">Development</h3>
                <p class="text-gray-400">
                    High performance web applications.
                </p>
            </div>

            <div class="p-10 border border-neutral-800 hover:border-orange-400 transition">
                <h3 class="text-2xl font-bold mb-4">Branding</h3>
                <p class="text-gray-400">
                    Build strong digital identity.
                </p>
            </div>

        </div>

    </section>
    <section class="py-32 bg-black">

        <div class="container mx-auto grid lg:grid-cols-3 gap-6">

            <img src="" class="hover:scale-105 transition">
            <img src="" class="hover:scale-105 transition">
            <img src="" class="hover:scale-105 transition">

        </div>

    </section>
</template>

<style>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>