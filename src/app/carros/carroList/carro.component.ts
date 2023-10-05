import { Component } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent {
  carros: Carro[] = [];
  novoCarro: Carro = new Carro();

  constructor(private carroService: CarroService) {}

  adicionarCarro() {
    this.carroService.adicionarCarro(this.novoCarro);
    this.novoCarro = new Carro();
  }

  ngOnInit() {
    this.carros = this.carroService.listarCarros();
  }
}
