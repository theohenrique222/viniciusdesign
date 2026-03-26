<template>
    <section class="bg-neutral">
        <div class="bg-[url('/img/backgrounds/footer-bg-1.png')] bg-cover w-full bg-no-repeat">
            <div class="flex justify-between p-6 items-center">
                <div>
                    <img src="/img/logo-light.png" alt="logo" class="">
                </div>

                <!-- Redes sociais -->
                <ul class="flex gap-5">
                    <li v-for="social in socials" :key="social.id">
                        <a :href="social.href">
                            <i class="bg-black p-3 rounded-full hover:-translate-y-1 transition-all hover:bg-amber-800"
                                :class="social.icon" style="font-size: 1.5rem"></i>
                        </a>
                    </li>
                </ul>

            </div>


            <div class="px-6 flex w-full text-white justify-between font-extralight p-5">
                <h3>&copy; 2026. Todos os direitos reservados</h3>
                <h3>Vinicius Design</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
const socials = [
    { id: 1, icon: 'pi pi-instagram', href: '#' },
    { id: 2, icon: 'pi pi-whatsapp', href: '#' },
    { id: 3, icon: 'pi pi-facebook', href: '#' }
]
</script>