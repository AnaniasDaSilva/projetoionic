import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Enviar";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  }

  /* Metodo de cadastro */
 cadastro(form:any){
  this.http.post('http://localhost:3000/produtos', form.value, this.httpOptions).subscribe();
 }
}
