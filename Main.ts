import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";

const biblioteca = new Biblioteca("Biblioteca Central");

biblioteca.adicionarLivro(new Livro(1, "Clean Code", "Robert C Martin"));
biblioteca.adicionarLivro(new Livro(2, "Refactoring", "Martin Fowler"));

biblioteca.emprestarLivro(1)