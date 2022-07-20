import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor( private router: Router) { }

  listarContatos(){
    this.router.navigate(['listagem'])
  }

  adicionarContatos() {
    this.router.navigate(['adicionar'])
  }

  ngOnInit(): void {
  }

}
