    // Biblioteca de Livros em TypeScript

class Livro {
    public titulo: string;
    public disponivel: boolean; 

    constructor(titulo: string) {
        this.titulo = titulo;
        this.disponivel = true; 
    }
}

class Biblioteca {
    public livros: Livro[];

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

public async adicionar(titulo: string): Promise<void> {
        this.livros.push(new Livro(titulo));
        await this.mostrar();
    }

public async emprestar(titulo: string): Promise<void> {
        const livro: Livro | undefined = this.livros.find(l => l.titulo === titulo);

        if (livro && livro.disponivel) {
            livro.disponivel = false;
            alert(`Você emprestou este livro: ${titulo}`);
        } else {
            alert("Livro não encontrado ou já emprestado.");
        }
        await this.mostrar();
    }

public async devolver(titulo: string): Promise<void> {
        const livro: Livro | undefined = this.livros.find(l => l.titulo === titulo);

        if (livro && !livro.disponivel) {
            livro.disponivel = true;
            alert(`Você devolveu: ${titulo}`);
        } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            alert("Livro não encontrado ou não está emprestado.");
        }
        await this.mostrar();
    }

    // Método mostrar() da classe Biblioteca

public async mostrar(): Promise<void> {
    const div: HTMLElement | null = document.getElementById("livros");
    if (!div) {
        console.log("Elemento 'livros' não encontrado no DOM.");
        return;
    }

    div.innerHTML = "<h3 class='text-xl font-Nexa Rust Sans mb-4 text-purple-100'>Livros na Biblioteca:</h3>";
    
    this.livros
        .filter(l => l.disponivel)
        .forEach(l => { 
        const p: HTMLParagraphElement = document.createElement("p");
        
    // Classes Tailwind para o parágrafo (borda, fundo, espaçamento)
        let pClasses = "p-3 my-2 rounded-lg border-l-4 shadow-sm flex justify-between items-center";
        
    // Classes Tailwind para o status (cores específicas)
        if (l.disponivel) {
            pClasses += " bg-green-50 border-green-500 text-green-800";
        } else {
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

const btnAdicionar = document.getElementById("btnAdicionar") as HTMLButtonElement;
const btnEmprestar = document.getElementById("btnEmprestar") as HTMLButtonElement;
const btnDevolver = document.getElementById("btnDevolver") as HTMLButtonElement;
const inputTitulo = document.getElementById("titulo") as HTMLInputElement;

    // Eventos dos botões
    
if (btnAdicionar && inputTitulo) {
    btnAdicionar.onclick = async () => {
        const titulo: string = inputTitulo.value.trim();
        if (titulo) {
            await biblioteca.adicionar(titulo);
            inputTitulo.value = ""; // Limpa o input
        }
    };
}

if (btnEmprestar && inputTitulo) {
    btnEmprestar.onclick = async () => {
        const titulo: string = inputTitulo.value.trim();
        if (titulo) await biblioteca.emprestar(titulo);
    };
}

if (btnDevolver && inputTitulo) {
    btnDevolver.onclick = async () => {
        const titulo: string = inputTitulo.value.trim();
        if (titulo) await biblioteca.devolver(titulo);
    };
}