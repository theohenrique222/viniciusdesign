<template>
    <section class="bg-black">
        <div class="bg-[url('/img/backgrounds/testimonial-bg-1.png')] bg-cover w-full bg-no-repeat">

            <div class="w-full px-6 m-auto p-24">

                <Galleria 
                    :value="testimonials" 
                    :numVisible="1" 
                    :circular="true" 
                    :showThumbnails="false"
                    :showItemNavigators="true"
                    class="custom-galleria"
                    >

                    <template #item="slotProps">

                        <div class="p-8 flex flex-col md:flex-row items-center gap-6">

                            <!-- Foto -->
                            <img :src="slotProps.item.image" :alt="slotProps.item.name"
                                class="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover" />

                            <!-- Conteúdo -->
                            <div class="flex flex-col gap-3 text-center md:text-left">

                                <p class="text-neutral-500 text-2xl leading-relaxed">
                                    "{{ slotProps.item.comment }}"
                                </p>

                                <div class="flex items-center gap-3">
                                    <h3 class="text-white font-extrabold text-2xl">
                                        {{ slotProps.item.name }}
                                        <span class="text-amber-500 font-light text-xl uppercase">
                                            . {{ slotProps.item.role }}
                                        </span>
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </template>

                </Galleria>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const testimonials = ref([
    {
        name: "João Silva",
        role: "Empreendedor",
        comment: "O design ficou incrível! Superou minhas expectativas e trouxe muito mais profissionalismo para minha marca.",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Maria Oliveira",
        role: "Social Media",
        comment: "Trabalho impecável, muito detalhista e com uma estética moderna. Recomendo demais!",
        image: "https://i.pravatar.cc/150?img=2"
    },
    {
        name: "Carlos Souza",
        role: "Dono de empresa",
        comment: "A identidade visual ficou perfeita. Meu negócio ganhou outro nível de apresentação.",
        image: "https://i.pravatar.cc/150?img=3"
    }
]);
</script>

<style>
.p-galleria {
    border-width: 0 !important;
    border-color: transparent !important;
    background: transparent !important;
}

</style>