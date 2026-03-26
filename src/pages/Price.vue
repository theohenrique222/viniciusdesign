<template>
    <div class="bg-black">
        <div class="bg-[url('/img/backgrounds/footer-bg-1.png')] bg-center w-full bg-no-repeat">
            <div class="px-6 py-20 md:px-12 lg:px-20">
    
                <div class="flex flex-col gap-4 items-center justify-center mb-16">
                    <div class="text-white font-extrabold text-4xl lg:text-7xl text-center">
                        Nossos <span class="text-amber-500">Planos</span>
                    </div>
                    <div class="text-neutral-500 font-light text-lg text-center">
                        Opções pensadas para atender diferentes necessidades.
                    </div>
                </div>
    
                <!-- Cards -->
                <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
    
                    <div v-for="price in prices" :key="price.id" class="relative flex-1 p-8 rounded-2xl flex flex-col gap-6 transition-all duration-300
                        bg-neutral-900 border hover:border-amber-500 hover:-translate-y-2"
                        :class="price.highlight ? 'border-2 border-amber-500 scale-105' : 'border-neutral-800'">
    
                        <!-- Badge destaque -->
                        <div v-if="price.highlight"
                            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                            Mais escolhido
                        </div>
    
                        <!-- Título -->
                        <div class="flex flex-col gap-2">
                            <h4 class="text-white font-extrabold text-3xl">
                                {{ price.title }}
                            </h4>
                            <p class="text-neutral-400 text-sm">
                                {{ price.subtitle }}
                            </p>
                        </div>
    
                        <div class="w-full h-px bg-neutral-800" />
    
                        <!-- Preço -->
                        <div class="flex items-end gap-1">
                            <span class="text-white text-lg">R$</span>
                            <span class="text-white text-4xl font-extrabold">
                                {{ price.value }}
                            </span>
                            <span class="text-neutral-400 text-sm">/mês</span>
                        </div>
    
                        <div class="w-full h-px bg-neutral-800" />
    
                        <!-- Serviços -->
                        <ul class="flex flex-col gap-3 flex-1">
                            <li v-for="(service, index) in price.services" :key="index" class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-amber-500"></i>
                                <span class="text-neutral-300 text-sm">
                                    {{ service }}
                                </span>
                            </li>
                        </ul>
    
                        <!-- Botão -->
                        <Button label="Começar agora" rounded class="w-full hover:opacity-80 transition-all" style=" --p-button-primary-background: #F69900; 
                            --p-button-primary-active-background:var(--p-button-primary-background); --p-button-primary-hover-background: var(--p-button-primary-background); --p-button-primary-border-color: var(--p-button-primary-background); --p-button-primary-hover-border-color:var(--p-button-primary-background); --p-button-primary-active-border-color:var(--p-button-primary-background); 
                            --p-button-primary-color: #FFF;
                            --p-button-primary-hover-color: #FFF; 
                            --p-button-primary-active-color: #FFF; " />
                    </div>
    
                </div>
            </div>
    
            <!-- Header -->
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';

const prices = [
    {
        id: 1,
        title: 'Essencial',
        subtitle: 'Para quem precisa iniciar sua presença visual.',
        value: '29,90',
        highlight: false,
        services: [
            'Criação de artes para redes sociais',
            'Paleta de cores personalizada',
            'Templates editáveis'
        ]
    },
    {
        id: 2,
        title: 'Profissional',
        subtitle: 'Para marcas que querem se destacar visualmente.',
        value: '49,90',
        border: 'border border-amber-500',
        highlight: true,
        services: [
            'Artes mensais para redes sociais',
            'Identidade visual refinada',
            'Padronização do feed',
            'Capas e destaques personalizados'
        ]
    },
    {
        id: 3,
        title: 'Premium',
        subtitle: 'Para uma presença visual completa e estratégica.',
        value: '79,90',
        highlight: false,
        services: [
            'Identidade visual completa',
            'Direção criativa personalizada',
            'Criação de campanhas visuais',
            'Planejamento de conteúdo visual'
        ]
    }
];
</script>