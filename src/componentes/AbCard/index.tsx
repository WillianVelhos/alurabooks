import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbCardOpcao {
    children: ReactNode
}

const CardEstilizado = styled.div`
    width:725px;
    height: 266px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export const AbCard = ({ children }: AbCardOpcao) => {
    return (
        <CardEstilizado>
            {children}
        </CardEstilizado>
    );
}