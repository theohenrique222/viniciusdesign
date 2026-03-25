<template>
    <div class="bg-neutral-950 px-6 py-20 md:px-12 lg:px-20">
        <div class="flex flex-col gap-4 items-center justify-center mb-12">
            <div class="text-white font-extrabold text-4xl lg:text-7xl text-center">Pricing Plans</div>
            <div class="text-amber-500 font-light text-lg text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        </div>

        <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-gray-800 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-white font-extrabold font-['Plus_Jakarta_Sans']  text-3xl leading-tight">Básico</h4>
                    <p class="text-neutral-50 font-light leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
                </div>

                <div class="w-full h-px bg-neutral-200" />
                <div class="flex items-center gap-2">
                    <span class="font-extrabold text-white text-xl leading-tight">R$</span>
                    <span class="font-extrabold text-white text-3xl leading-tight">29,90</span>
                    <span class="font-medium text-white leading-tight">/ mês</span>
                </div>
                <div class="w-full h-px bg-neutral-200 " />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Morbi tincidunt augue </span>
                    </li>
                </ul>
                <Button label="Começar agora" rounded class="w-full hover:opacity-80 transition-all" 
                style="
                    --p-button-primary-background: #F69900;
                    --p-button-primary-active-background:var(--p-button-primary-background);
                    --p-button-primary-hover-background: var(--p-button-primary-background); --p-button-primary-border-color: var(--p-button-primary-background);
                    --p-button-primary-hover-border-color:var(--p-button-primary-background);
                    --p-button-primary-active-border-color:var(--p-button-primary-background);
                    --p-button-primary-color: #FFF;
                    --p-button-primary-hover-color: #FFF;
                    --p-button-primary-active-color: #FFF;
                    "/>
            </div>

            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-gray-800 border-4 border-amber-500 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-white font-extrabold font-['Plus_Jakarta_Sans']  text-3xl leading-tight">Premium</h4>
                    <p class="text-neutral-50 font-light leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
                </div>

                <div class="w-full h-px bg-neutral-200" />
                <div class="flex items-center gap-2">
                    <span class="font-extrabold text-xl text-white leading-tight">R$</span>
                    <span class="font-extrabold text-3xl text-white leading-tight">29,90</span>
                    <span class="font-medium text-white leading-tight">/ mês</span>
                </div>
                <div class="w-full h-px bg-neutral-200 " />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Morbi tincidunt augue </span>
                    </li>
                </ul>
                <Button label="Começar agora" rounded class="w-full hover:opacity-80 transition-all" 
                style="
                    --p-button-primary-background: #F69900;
                    --p-button-primary-active-background:var(--p-button-primary-background);
                    --p-button-primary-hover-background: var(--p-button-primary-background); --p-button-primary-border-color: var(--p-button-primary-background);
                    --p-button-primary-hover-border-color:var(--p-button-primary-background);
                    --p-button-primary-active-border-color:var(--p-button-primary-background);
                    --p-button-primary-color: #FFF;
                    --p-button-primary-hover-color: #FFF;
                    --p-button-primary-active-color: #FFF;
                    "/>
            </div>

            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-gray-800  shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-white font-extrabold font-['Plus_Jakarta_Sans']  text-3xl leading-tight">Intermediário</h4>
                    <p class="text-neutral-50 font-light leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
                </div>

                <div class="w-full h-px bg-neutral-200" />
                <div class="flex items-center gap-2">
                    <span class="font-extrabold text-xl text-white leading-tight">R$</span>
                    <span class="font-extrabold text-3xl text-white leading-tight">29,90</span>
                    <span class="font-medium text-white leading-tight">/ mês</span>
                </div>
                <div class="w-full h-px bg-neutral-200 " />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-amber-500" />
                        <span class="text-neutral-200  leading-tight"> Morbi tincidunt augue </span>
                    </li>
                </ul>
                <Button label="Começar agora" rounded class="w-full hover:opacity-80 transition-all" 
                style="
                    --p-button-primary-background: #F69900;
                    --p-button-primary-active-background:var(--p-button-primary-background);
                    --p-button-primary-hover-background: var(--p-button-primary-background); --p-button-primary-border-color: var(--p-button-primary-background);
                    --p-button-primary-hover-border-color:var(--p-button-primary-background);
                    --p-button-primary-active-border-color:var(--p-button-primary-background);
                    --p-button-primary-color: #FFF;
                    --p-button-primary-hover-color: #FFF;
                    --p-button-primary-active-color: #FFF;
                    "/>
            </div>

        </div>
    </div>
</template>
<script setup>
import Button from 'primevue/button';
</script>