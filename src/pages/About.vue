<template>
    <div class="bg-black text-white relative min-h-160 lg:min-h-0 bg-surface-0 dark:bg-surface-900 flex lg:flex-row flex-col">
        <div class="flex lg:flex lg:flex-row flex-col justify-center md:justify-normal h-full flex-1">
            <div class="relative flex-1 z-20 flex items-center justify-center">
                <div class="flex items-center justify-center h-full">
                    <div class="w-full max-w-2xl px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left">
                        <p class="font-light uppercase tracking-widest text-neutral-400">Sobre mim</p>
                        
                        <h3 class="font-bold text-7xl mb-6 ">
                            Create the screens your
                        </h3>

                        <p class="text-amber-500 roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p class="pt-8 text-xl font-extralight leading-normal mb-8 max-w-xl lg:max-w-none roboto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div class="flex items-center gap-4 justify-center lg:justify-start">
                            <button class="bg-amber-500 px-8 py-5 roboto">Fale comigo</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute lg:relative inset-0 lg:inset-auto flex-1">
                <div class="absolute lg:hidden inset-0 bg-surface-900/60 dark:bg-surface-900/80 z-10" />
                <img
                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png"
                    alt="hero-1"
                    class="h-full w-full object-cover xl:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>
