import React from "react";
import { AbGrupoAcoes, AbGrupoOpcoesProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbGrupoAcoes',
    component: AbGrupoAcoes
} as ComponentMeta<typeof AbGrupoAcoes>


const Template: ComponentStory<typeof AbGrupoAcoes> = (args) => <AbGrupoAcoes {...args} />

export const Primario = Template.bind({})

Primario.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'E-book',
            corpo: 'R$ 10',
            rodape: '.pdf'
        },
        {
            id: 2,
            titulo: 'Fisico',
            corpo: 'R$ 20',
            rodape: '.pdf'
        },
        {
            id: 3,
            titulo: 'Teste',
            corpo: 'R$ 20',
            rodape: '.pdf'
        }
    ]
} as AbGrupoOpcoesProps