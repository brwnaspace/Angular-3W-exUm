import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-colabs',
  templateUrl: './lista-colabs.component.html',
  styleUrls: ['./lista-colabs.component.scss']
})
export class ListaColabsComponent {

  title: string = 'Listagem de Colaboradores';
  colab: Colabs[] = [];

  constructor() {
    this.colab = [
      { id: 2, img: 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg', nome: 'Ana Letícia', cargo: 'Desenvolvedor(a) Pl', empresa: "MJV" },
      { id: 7, img: 'https://img.freepik.com/fotos-gratis/retrato-de-um-empresario-barbudo-feliz-e-surpreso-de-terno-cinza-e-oculos-segurando-o-tablet-digital_1258-54211.jpg?w=2000', nome: 'Nathan Carlos', cargo: 'Desenvolvedor(a) Pl', empresa: "MJV" },
      { id: 1, img: 'https://t4.ftcdn.net/jpg/04/91/98/55/360_F_491985520_6sSd5jmpm43Oo094YvosIAzgMP4vI5PX.jpg', nome: 'Bruna Lima', cargo: 'Desenvolvedor(a) Pl', empresa: "MJV" },
      { id: 3, img: 'https://img.freepik.com/premium-photo/confident-african-american-business-woman_33839-2893.jpg', nome: 'Brenda Machado', cargo: 'Desenvolvedor(a) Pl', empresa: "MJV" },
      { id: 4, img: 'https://img.freepik.com/fotos-gratis/chefe-bem-sucedido-satisfeito-mostrando-o-polegar-aprovar-e-elogiar-o-bom-trabalho-branco_1258-26380.jpg?w=2000', nome: 'Arthur Castro', cargo: 'Desenvolvedor(a) Pl', empresa: "MJV" },
    ];
  }

  ngOnInit(): void {

  }

}

interface Colabs {
  id: number;
  img: any;
  nome: string;
  cargo: string;
  empresa: string;
}
