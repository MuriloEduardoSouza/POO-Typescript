import { StatusLivro } from "./Enum-status";

export class Livro {
  private id: number;
  private nome: string;
  private autor: string;
  public status: StatusLivro = StatusLivro.DISPONIVEL;

  constructor(id: number, nome: string, autor: string) {
    this.id = id;
    this.nome = nome;
    this.autor = autor;
  }

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getAutor(): string {
    return this.autor;
  }

  public emprestar() {
    this.status = StatusLivro.EMPRESTADO;
  }

  public devolver(): void {
    if (StatusLivro.DISPONIVEL) {
      console.log("Não é possivel devolver um Livro disponivel!");
    }
    this.status = StatusLivro.DISPONIVEL;
  }
}
