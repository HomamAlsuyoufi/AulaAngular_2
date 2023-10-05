import { Component } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
  livros: Livro[] = [];
  novoLivro: Livro = new Livro();

  constructor(private livroService: LivroService) {}

  adicionarLivro() {
    this.livroService.adicionarLivro(this.novoLivro);
    this.novoLivro = new Livro();
  }

  ngOnInit() {
    this.livros = this.livroService.listarLivros();
  }
}
