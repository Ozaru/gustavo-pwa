import { Component, inject, OnInit, signal } from '@angular/core';
import { CapoeiraModel, CapoeiraService } from './capoeira.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-capoeira',
  imports: [
    JsonPipe,
  ],
  templateUrl: './capoeira.component.html',
  styleUrl: './capoeira.component.css'
})
export class CapoeiraComponent implements OnInit {

  private capoeiraService = inject(CapoeiraService)

  private treinos!: CapoeiraModel[]
  public treinoSelecionado!: CapoeiraModel
  public timer = signal(0)
  private pausado = true

  ngOnInit(): void {
    this.carregarTreinos()
    this.selecionarTreino()
  }

  private carregarTreinos() {
    this.treinos = this.capoeiraService.obterTreinos()
  }

  private selecionarTreino(index = 0) {
    this.treinoSelecionado = this.treinos[index]
    this.resetarTimer()
  }

  resetarTimer() {
    this.pausarTimer()
    this.timer.set(this.treinoSelecionado.tempoTreino)
  }

  iniciarTimer() {
    this.pausado = false
    const timerId = setInterval(() => {
      if (this.timer() == 0) {
        this.pausado = true
      }
      if (this.pausado) {
        clearInterval(timerId)
        return
      }
      this.timer.update(atual => atual - 1)
    }, 1000)
  }

  pausarTimer() {
    this.pausado = true
  }

}
