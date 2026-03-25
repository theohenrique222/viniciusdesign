<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <nav 
    :class="[
        'fixed top-0 w-full z-50 transition-all duration-1000 ease-out',
        isScrolled 
            ? 'bg-neutral-950 shadow-lg' 
            : 'bg-transparent py-6'
    ]"
    >
        <div class="container mx-auto flex justify-between items-center p-6">

            <!-- Logo -->
            <div class="">
                <img src="/img/logo-light.png" alt="logo" class="">
            </div>

            <!-- Menu Desktop -->
            <ul class="hidden lg:flex gap-10 text-white font-semibold">
                <li><a href="#" class="text-amber-500">Início</a></li>
                <li><a href="#services" class="hover:text-amber-500 transition">Sobre</a></li>
                <li><a href="#" class="hover:text-amber-500 transition">Services</a></li>
                <li><a href="#" class="hover:text-amber-500 transition">Portfolio</a></li>
                <li><a href="#" class="hover:text-amber-500 transition">Contact</a></li>
            </ul>

            <!-- Icons + Hamburger -->
            <div class="flex items-center gap-5 text-white">
                <a href="#" class="pi pi-search text-xl"></a>
                <a href="#" class="pi pi-cart-minus text-xl"></a>

                <!-- Hamburger -->
                <button 
                    @click="isOpen = !isOpen"
                    class="lg:hidden flex flex-col gap-1"
                >
                    <span class="w-6 h-0.5 bg-white"></span>
                    <span class="w-6 h-0.5 bg-white"></span>
                    <span class="w-6 h-0.5 bg-white"></span>
                </button>
            </div>
        </div>

        <!-- Menu Mobile -->
        <div 
            v-if="isOpen"
            class="lg:hidden bg-neutral-900 text-white px-6 pb-6 space-y-4 font-semibold"
        >
            <a href="#" class="block text-amber-500">Início</a>
            <a href="#" class="block hover:text-amber-500">Sobre</a>
            <a href="#" class="block hover:text-amber-500">Services</a>
            <a href="#" class="block hover:text-amber-500">Portfolio</a>
            <a href="#" class="block hover:text-amber-500">Contact</a>
        </div>
    </nav>
</template>