# Bibliotaca-BFD-2025
Criação de um projeto simples de gerenciamento de biblioteca desenvolvido em TypeScript para demonstrar a manipulação básica do DOM e o uso do framework CSS utilitário Tailwind CSS.

O sistema permite que o usuário adicione novos livros e gerencie o status de disponibilidade (emprestar/devolver) dos itens existentes.

##  Funcionalidades

* **Visualização:** Exibe apenas os livros que estão **disponíveis** para empréstimo.
* **Adicionar:** Permite a inclusão de novos livros à lista.
* **Emprestar:** Altera o status de um livro para "emprestado" (removendo-o da visualização principal).
* **Devolver:** Altera o status de um livro para "disponível" (adicionando-o de volta à visualização principal).
* **Design:** Interface moderna e responsiva utilizando **Tailwind CSS**.

##  Tecnologias Utilizadas

* **TypeScript:** Linguagem principal para a lógica de classes (`Livro` e `Biblioteca`) e manipulação do DOM.
* **JavaScript (ES6+):** O TypeScript é transpilado para JS para ser executado no navegador.
* **Tailwind CSS (CDN):** Framework CSS utilitário para estilização e layout rápido.

##  Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Você precisa ter o **Node.js** e o **TypeScript Compiler (TSC)** instalados.

```bash
# Instalar o TypeScript globalmente, se ainda não o tiver
npm install -g typescript
