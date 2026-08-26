import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreinoModel } from '../capoeira.service';

@Component({
  imports: [],
  selector: 'app-treino-select',
  styleUrl: './treino-select.css',
  templateUrl: './treino-select.html',
})
export class TreinoSelect {

  @Input() treinos!: TreinoModel[]
  @Input() treinoSelecionado?: number
  @Output() selecionar = new EventEmitter<number | undefined>()

  selecionarTreino(index: number | undefined) {
    this.selecionar.emit(index)
  }

}
