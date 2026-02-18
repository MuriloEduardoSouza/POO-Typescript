import { StatusLivro } from "./Enum-status";
import { Livro } from "./Livro";

export class Biblioteca {
  nome: string;
  livros: Livro[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  public listarDisponiveis(): Livro[] {
    return this.livros.filter((livro) => {
      return livro.status === StatusLivro.DISPONIVEL;
    });
  }

  public buscarPorAutor(autor: string): Livro[] {
    return this.livros.filter((livro) => {
      return livro.getAutor() === autor;
    });
  }

  public emprestarLivro(idLivro: number): void {
    const disponiveis = this.listarDisponiveis();

    const encontrado = disponiveis.find((livro) => {
      return livro.getId() === idLivro;
    });

    if (encontrado) {
      encontrado.emprestar();
    }
    console.log("Livro não encontrado, ou já está emprestado.");
  }
}
