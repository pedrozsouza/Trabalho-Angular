import { Injectable } from '@angular/core';
import { IProduto } from '../produto';

interface ItemPedido {
  produto: IProduto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  itens: ItemPedido[] = [];

  constructor() { 

  }

  adicionaProduto(produto: IProduto) {
    const item = this.itens.find(item => item.produto.descricao === produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1
      })
    }
  }

  getValorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  getQuantidadeTotal() {
    let qtd = 0;
    for (const item of this.itens) {
      qtd += item.quantidade;
    }
    return qtd;
  }

  limpar() {
    this.itens = [];
  }
}
