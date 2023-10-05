import { Component ,OnInit} from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent implements OnInit{
  pessoas: Pessoa[] = [];
  novoPessoa: Pessoa = new Pessoa();

  constructor(private pessosaService: PessoaService ) {}

  adicionarPessoa() {
    this.pessosaService.adicionarPessoa(this.novoPessoa);
    this.novoPessoa = new Pessoa();
  }

  ngOnInit() {
    this.pessoas = this.pessosaService.listarPessoas();
  }
  
}
