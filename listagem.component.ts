import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  contatos = [
    {nome: 'Fulano',telefone: '452-5151' ,whatsapp: '4458-4569', endereco: 'Rua 15' },
    {nome: 'Fulano',telefone: '452-5151' ,whatsapp: '4458-4569', endereco: 'Rua 15' },
    {nome: 'Fulano',telefone: '452-5151' ,whatsapp: '4458-4569', endereco: 'Rua 15' },
  ];
  route: any;

  constructor( private ContatoService: ContatoService) { }

  ngOnInit(): void {
  }
  sair() {
    this.route.navigate([''])
  }

}
