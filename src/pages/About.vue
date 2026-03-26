<template>
  <div id="about" class="bg-black text-white relative min-h-160 lg:min-h-0 flex lg:flex-row flex-col">
    <div class="flex lg:flex-row flex-col justify-center md:justify-normal h-full flex-1">
      <div class="relative flex-1 z-20 flex items-center justify-center">
        <div class="flex items-center justify-center h-full">
          <div class="w-full max-w-2xl px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left">
            <p class="font-light uppercase tracking-widest text-amber-500">Sobre meu trabalho</p>
            
            <h3 class="font-extrabold lg:text-7xl text-6xl mb-6">
              Criando <span class="text-amber-500">experiências</span> que encantam
            </h3>

            <p class="text-amber-500 roboto">
                Transformando ideias complexas em designs modernos e intuitivos
            </p>

            <p class="pt-8 text-xl font-extralight leading-normal mb-8 max-w-xl lg:max-w-none roboto">
              Desde cedo, encontrei minha paixão em transformar conceitos em interfaces visuais elegantes. Cada projeto é uma oportunidade de unir estética e funcionalidade, criando experiências que conectam pessoas e ideias. Minha missão é entregar soluções digitais que sejam não apenas bonitas, mas também intuitivas e memoráveis.
            </p>

            <div class="flex items-center gap-4 justify-center lg:justify-start">
              <button class="bg-amber-500 px-8 py-5 roboto">Fale comigo</button>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute lg:relative inset-0 lg:inset-auto flex-1">
        <!-- Máscara escura sobre a imagem -->
        <div class="absolute inset-0 bg-black/50 z-10 lg:hidden"></div>

        <img
          src="/img/backgrounds/hero/slider-1-shape-2.jpg"
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