<template>
    <section class="w-full bg-black overflow-hidden">
        <div class="bg-[url('/img/backgrounds/hero/slider-1-bg-1.png')] bg-cover w-full bg-no-repeat">

            <div class="flex flex-col lg:flex-row w-full justify-between">

                <!-- Sidebar -->
                <div class="hidden lg:flex flex-col justify-between h-screen text-white px-5 py-10">
                    <div class="flex flex-col items-center w-full space-y-10">
                        <img src="/img/logo-light.png" alt="logo" class="w-16">

                        <ul class="space-y-4">
                            <li><i class="pi pi-instagram"></i></li>
                            <li><i class="pi pi-whatsapp"></i></li>
                            <li><i class="pi pi-linkedin"></i></li>
                            <li><i class="pi pi-facebook"></i></li>
                        </ul>
                    </div>

                    <div class="flex w-full h-full items-end">
                        <a href="" class="[writing-mode:vertical-rl]">
                            +55 84 99999-9999
                        </a>
                    </div>
                </div>

                <!-- Conteúdo principal -->
                <div class="flex lg:pt-0 mt-32 flex-col w-full text-left text-white px-5 py-16 justify-center">

                    <div class="flex items-center justify-center lg:justify-start my-auto">
                        <p class="flex flex-col 
                                  text-7xl
                                  lg:text-8xl 
                                  font-extrabold 
                                  font-['Plus_Jakarta_Sans'] 
                                  tracking-tight">

                            <span class="text-amber-500">Vinicius</span>
                            Estratégia Digital
                        </p>
                    </div>
                </div>

                <!-- Imagem -->
                <div class="hidden lg:flex w-full justify-end pb-10 lg:pb-0">
                    <img class="max-w-full mask-alpha mask-l-black mask-l-from-50% mask-l-to-transparent"
                        src="/img/backgrounds/hero/slider-1-shape-2.jpg" alt="Dispositivos eletrônicos">
                </div>
            </div>

            <!-- Botão circular -->
            <div class="flex justify-center mt-10 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2">
                <a href="#" class="relative flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32">

                    <svg class="absolute w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                        <defs>
                            <path id="circle" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                        </defs>

                        <text font-size="10" fill="white" letter-spacing="4" class="uppercase">
                            <textPath href="#circle">
                                Experiência em excelência
                            </textPath>
                        </text>
                    </svg>

                    <span class="text-amber-500 z-10 hover:-rotate-45 transition duration-300 p-4 sm:p-6 rounded-full">
                        <i class="pi pi-arrow-down-right text-xl sm:text-3xl font-bold"></i>
                    </span>

                </a>
            </div>

        </div>
    </section>
</template>