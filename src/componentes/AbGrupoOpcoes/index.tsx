import React, { useState } from 'react'
import styled from "styled-components";

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
    width: 194px;
    height: 88px;
    background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};;
        font-weight: 700;
        font-size: 16px;
    }
    footer {
        color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};;
        font-weight: 400;
        font-size: 12px;
    }
`
export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[]
    valorPadrao?: AbGrupoOpcao | null
    onChange?: (opcao: AbGrupoOpcao) => void
}

export const AbGrupoAcoes = ({ opcoes }: AbGrupoOpcoesProps) => {
    const [selecionado, setSelecionado] = useState<AbGrupoOpcao | null>(null)

    const aoSelecionar = (opcao: AbGrupoOpcao) => {
        setSelecionado(opcao);
    }

    return (<>
        {opcoes.map(opcao =>
            <SectionEstilizada key={opcao.id} onClick={() => aoSelecionar(opcao)} selecionado={selecionado?.id === opcao.id}>
                <header>
                    {opcao.titulo}
                </header>
                <div>
                    <strong> {opcao.corpo} </strong>
                </div>
                <footer>
                    {opcao.rodape}
                </footer>
            </SectionEstilizada>
        )
        }
    </>
    )
}