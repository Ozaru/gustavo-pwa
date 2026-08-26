import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' }) // permite injetar esse serviço em outra classe automaticamente.
export class CapoeiraService {

    obterTreinos() {
        return treinos
    }

}

export class TreinoModel { // classe que representa um treino.
    nome!: string
    corCorda!: string
    movimentos!: MovimentoModel[]
    tempoTreino!: number
    tempoDescanso!: number
}

export class MovimentoModel {
    nome!: string
    imagem!: string
}

const treinos: TreinoModel[] = [ // lista fixa de treinos disponiveis.
    {
        nome: 'Teste (Teste)',
        corCorda: 'black',
        tempoTreino: 1,
        tempoDescanso: 1,
        movimentos: [
            { nome: 'movimento 1', imagem: 'https://cdna.artstation.com/p/assets/images/images/038/536/024/original/maiara-filli-martins-de-almeida-capoeira-macaco.gif?1623348666' },
            { nome: 'movimento 2', imagem: 'https://mudroljub.github.io/list-of-capoeira-moves/images/gif/Armada_Dupla.gif' },
            { nome: 'movimento 3', imagem: 'https://i.pinimg.com/originals/d0/82/f5/d082f51352593ef113c1a2f023e30e03.gif' },
            { nome: 'movimento 4', imagem: 'https://i.pinimg.com/originals/e0/5e/4c/e05e4c382984ed844b90151edb1c5e1e.gif' },
            { nome: 'movimento 5', imagem: 'https://68.media.tumblr.com/04c0678524433da649d3f52c6aa759b5/tumblr_n48ovpwOF91tz1b1ro1_500.gif' },
        ],
    },
    {
        nome: 'Corda Crua (Iniciante)',
        corCorda: 'grey',
        tempoTreino: 30,
        tempoDescanso: 20,
        movimentos: [
            { nome: 'GINGA BASE (Postura e Guarda)', imagem: '' },
            { nome: 'ESQUIVA LATERAL', imagem: '' },
            { nome: 'COCORINHA (Defesa Baixa)', imagem: '' },
            { nome: 'MEIA LUA DE FRENTE', imagem: '' },
            { nome: 'BENÇÃO (Chute Frontal)', imagem: '' },
            { nome: 'GINGA COM NEGATIVA DE FRENTE', imagem: '' },
        ],
    },
    {
        nome: 'Corda Verde (Batizado)',
        corCorda: 'green',
        tempoTreino: 40,
        tempoDescanso: 15,
        movimentos: [
            { nome: 'GINGA ACELERADA', imagem: '' },
            { nome: 'ARMADA (Chute Rotacional)', imagem: '' },
            { nome: 'QUEIXADA', imagem: '' },
            { nome: 'RALEIRAS / ESQUIVA DE TRÁS', imagem: '' },
            { nome: 'MARTELO LATERAL', imagem: '' },
            { nome: 'ROLÊ (Movimentação de Chão)', imagem: '' },
        ],
    },
    {
        nome: 'Corda Amarela (Intermediário)',
        corCorda: 'yellow',
        tempoTreino: 45,
        tempoDescanso: 15,
        movimentos: [
            { nome: 'GINGA COM MUDANÇA DE RITMO', imagem: '' },
            { nome: 'MEIA LUA DE COMPASSO', imagem: '' },
            { nome: 'AU TRADICIONAL (Estrela)', imagem: '' },
            { nome: 'SÉRIE: ARMADA + NEGATIVA', imagem: '' },
            { nome: 'SÉRIE: QUEIXADA + COCORINHA', imagem: '' },
            { nome: 'SÉRIE: MARTELO + ROLÊ', imagem: '' },
        ],
    },
    {
        nome: 'Corda Azul (Avançado / Graduado)',
        corCorda: 'blue',
        tempoTreino: 50,
        tempoDescanso: 10,
        movimentos: [
            { nome: 'GINGA AGRESSIVA (Foco em Jogo)', imagem: '' },
            { nome: 'SÉRIE: MEIA LUA DE COMPASSO + SÃO BENTO', imagem: '' },
            { nome: 'AU BATIDO (Defesa/Ataque Plástico)', imagem: '' },
            { nome: 'BENÇÃO COM SALTO', imagem: '' },
            { nome: 'SÉRIE: QUEIXADA + ARMADA + ROLÊ', imagem: '' },
            { nome: 'FLOREIOS (Movimentos Acrobáticos)', imagem: '' },
        ],
    },
    {
        nome: 'Corda Vermelha/Branca (Mestre)',
        corCorda: 'red',
        tempoTreino: 60,
        tempoDescanso: 10,
        movimentos: [
            { nome: 'GINGA DE MESTRE (Malandragem pura)', imagem: '' },
            { nome: 'SEQUÊNCIA 1 DE MESTRE BIMBA', imagem: '' },
            { nome: 'SEQUÊNCIA 2 DE MESTRE BIMBA', imagem: '' },
            { nome: 'SÉRIE COMPLETA: ARMADA + COMPASSO + AU', imagem: '' },
            { nome: 'JOGO DE DENTRO (Espaço Curto)', imagem: '' },
            { nome: 'JOGO DE SÃO BENTO GRANDE', imagem: '' },
        ],
    },
]