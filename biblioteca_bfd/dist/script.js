"use strict";
// Biblioteca de Livros em TypeScript
class Livro {
    constructor(titulo) {
        this.titulo = titulo;
        this.disponivel = true;
    }
}
class Biblioteca {
    constructor() {
        this.livros = [
            new Livro("React Fluente"),
            new Livro("Guia Prático de HTML e CSS"),
            new Livro("JavaScript: O Guia Definitivo"),
            new Livro("Aprendendo TypeScript"),
            new Livro("Introdução ao Node.js"),
        ];
    }
    //Metodos assíncronos para manipulação de livros
    async adicionar(titulo) {
        this.livros.push(new Livro(titulo));
        await this.mostrar();
    }
    async emprestar(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (livro && livro.disponivel) {
            livro.disponivel = false;
            alert(`Você emprestou este livro: ${titulo}`);
        }
        else {
            alert("Livro não encontrado ou já emprestado.");
        }
        await this.mostrar();
    }
    async devolver(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (livro && !livro.disponivel) {
            livro.disponivel = true;
            alert(`Você devolveu: ${titulo}`);
        }
        else {
            alert("Livro não encontrado ou não está emprestado.");
        }
        await this.mostrar();
    }
    // Método mostrar() da classe Biblioteca
    async mostrar() {
        const div = document.getElementById("livros");
        if (!div) {
            console.log("Elemento 'livros' não encontrado no DOM.");
            return;
        }
        div.innerHTML = "<h3 class='text-xl font-semibold mb-4 text-gray-700'>Livros na biblioteca:</h3>";
        this.livros
            .filter(l => l.disponivel)
            .forEach(l => {
            const p = document.createElement("p");
            // Classes Tailwind para o parágrafo (borda, fundo, espaçamento)
            let pClasses = "p-3 my-2 rounded-lg border-l-4 shadow-sm flex justify-between items-center";
            // Classes Tailwind para o status (cores específicas)
            if (l.disponivel) {
                pClasses += " bg-green-50 border-green-500 text-green-800";
            }
            else {
                pClasses += " bg-red-50 border-red-500 text-red-800";
            }
            p.className = pClasses; // Aplica todas as classes
            p.textContent = `• ${l.titulo} (${l.disponivel ? "disponível" : "emprestado"})`;
            div.appendChild(p);
        });
    }
}
// Manipulação do DOM
const biblioteca = new Biblioteca();
biblioteca.mostrar();
const btnAdicionar = document.getElementById("btnAdicionar");
const btnEmprestar = document.getElementById("btnEmprestar");
const btnDevolver = document.getElementById("btnDevolver");
const inputTitulo = document.getElementById("titulo");
if (btnAdicionar && inputTitulo) {
    btnAdicionar.onclick = async () => {
        const titulo = inputTitulo.value.trim();
        if (titulo) {
            await biblioteca.adicionar(titulo);
            inputTitulo.value = ""; // Limpa o input
        }
    };
}
if (btnEmprestar && inputTitulo) {
    btnEmprestar.onclick = async () => {
        const titulo = inputTitulo.value.trim();
        if (titulo)
            await biblioteca.emprestar(titulo);
    };
}
if (btnDevolver && inputTitulo) {
    btnDevolver.onclick = async () => {
        const titulo = inputTitulo.value.trim();
        if (titulo)
            await biblioteca.devolver(titulo);
    };
}
