<template>
    <section class="w-full bg-black">
        <div class="bg-[url('img/backgrounds/hero/slider-1-bg-1.png')] bg-cover w-full h-full bg-no-repeat">
            <div class="flex flex-col lg:flex-row w-full justify-between">
                <div class="flex flex-col justify-between h-screen text-white px-5 py-10">
                    <div class="flex flex-col items-center w-full space-y-10">
                        
                        <img src="/public/img/logo-light.png" alt="logo" class="w-16">
                        <ul class="space-y-4">
                            <li><i class="pi pi-instagram"></i></li>
                            <li><i class="pi pi-whatsapp"></i></li>
                            <li><i class="pi pi-linkedin"></i></li>
                            <li><i class="pi pi-facebook"></i></li>

                        </ul>
                    </div>
                    <div class="flex w-full h-full items-end">
                        <a href="" class="[writing-mode:vertical-rl]">
                            +55 8499999-9999
                        </a>
                    </div>
                </div>

                <div class="flex flex-col w-full text-center lg:text-left text-white">
                    <div class="items-center flex my-auto">
                        <p class="flex text-8xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight">
                            Lorem ipsum, dolor sit amet
                        </p>
                    </div>

                </div>

                <div class="flex w-full justify-end">
                    <img class="animate-float mask-alpha mask-l-black mask-l-from-50% mask-l-to-transparent"
                        src="/var/www/html/vinicius/public/img/backgrounds/hero/slider-1-shape-2.jpg"
                        alt="Dispositivos eletrônicos">
                </div>
            </div>
            <div class="">
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <a href="#" class="relative flex items-center justify-center w-32 h-32">

                        <!-- texto circular -->
                        <svg class="absolute w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                            <defs>
                                <path id="circle" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                            </defs>

                            <text font-size="12" fill="white" letter-spacing="4" class="font-bold">
                                <textPath href="#circle">
                                    DISCOVER MORE AGENCY
                                </textPath>
                            </text>
                        </svg>

                        <!-- seta -->
                        <span class="text-amber-500 z-10 hover:-rotate-45 transition duration-300 p-6 rounded-full">
                            <i class="pi pi-arrow-down-right" style="font-size:2rem; font-weight: 900;"></i>
                        </span>

                    </a>
                </div>
            </div>
        </div>
    </section>
</template>