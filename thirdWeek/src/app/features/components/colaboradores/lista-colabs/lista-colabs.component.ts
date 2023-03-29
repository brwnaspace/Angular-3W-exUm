import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-colabs',
  templateUrl: './lista-colabs.component.html',
  styleUrls: ['./lista-colabs.component.scss']
})
export class ListaColabsComponent {

  title: string = 'Listagem de Colaboradores';
  colab: Colabs[] = [];

  /*
  Ana: Colabs = {
    id: 2, 
    nome: 'Ana Letícia', 
    cargo: 'Dev Pl', 
    empresa: "MJV"
  }

  Nathan: Colabs = {
    id: 7, 
    nome: 'Nathan Carlos', 
    cargo: 'Dev Pl', 
    empresa: "MJV"
  }

  Bruna: Colabs = {
    id: 1, 
    nome: 'Bruna Lima', 
    cargo: 'Dev Pl', 
    empresa: "MJV"
  }
  */

  constructor() {
    this.colab = [
      { id: 2, nome: 'Ana Letícia', cargo: 'Dev Pl', empresa: "MJV" },
      { id: 7, nome: 'Nathan Carlos', cargo: 'Dev Pl', empresa: "MJV" },
      { id: 1, nome: 'Bruna Lima', cargo: 'Dev Pl', empresa: "MJV" },
      { id: 3, nome: 'Brenda Machado', cargo: 'Dev Pl', empresa: "MJV" },
      { id: 4, nome: 'Maicon Brendon', cargo: 'Dev Pl', empresa: "MJV" },
      { id: 5, nome: 'Tamires Porto', cargo: 'Dev Pl', empresa: "MJV" }
    ];
  }

  ngOnInit(): void {

  }

}

interface Colabs {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
}
