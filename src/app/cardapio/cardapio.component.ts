import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { IProduto } from "../produto";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: IProduto[] = [];
  constructor(private httpClient: HttpClient, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.httpClient.get<IProduto[]>("http://localhost:3000/cardapio")
    .subscribe(produtos => {
      this.produtos = produtos;
    });
  }

}
