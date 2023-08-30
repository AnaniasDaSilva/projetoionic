import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  meusProdutos:Produtos[] = [];
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get<Produtos[]>('http://localhost:3000/produtos').subscribe(caixinha => this.meusProdutos = caixinha );
  }

  /* Metodo de delção */
  deletar(id:any){
    this.http.delete('http://localhost:3000/produtos/' + id ).subscribe();

    setTimeout(this.refresh, 2000);
  }

  refresh(){
    location.reload();
  }

}
