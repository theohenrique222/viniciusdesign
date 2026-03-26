<template>
    <div class="bg-black py-10">

        <div class="bg-neutral-900 p-8 rounded-2xl max-w-3xl mx-auto flex flex-col gap-6">
    
            <h3 class="text-white text-5xl font-extrabold">
                <span class="text-amber-500">Fale</span> comigo
            </h3>
    
            <p class="text-neutral-400">
                Me conte sobre seu projeto e vamos criar algo incrível juntos.
            </p>
    
            <!-- Inputs -->
            <div class="flex flex-col gap-4">
    
                <input type="text" placeholder="Seu nome"
                    class="bg-neutral-800 p-4 rounded-lg text-white outline-none focus:ring-2 focus:ring-amber-500" />
    
                <input type="text" placeholder="Seu WhatsApp"
                    class="bg-neutral-800 p-4 rounded-lg text-white outline-none focus:ring-2 focus:ring-amber-500" />
    
                <input type="email" placeholder="Seu email (opcional)"
                    class="bg-neutral-800 p-4 rounded-lg text-white outline-none focus:ring-2 focus:ring-amber-500" />
    
                <textarea rows="4" placeholder="Fale um pouco sobre o que você precisa..."
                    class="bg-neutral-800 p-4 rounded-lg text-white outline-none focus:ring-2 focus:ring-amber-500"></textarea>
    
            </div>
    
            <!-- Botão -->
            <button class="bg-amber-500 text-white font-bold py-4 rounded-lg hover:opacity-80 transition">
                Enviar mensagem
            </button>
    
        </div>
    </div>
</template>

