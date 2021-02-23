import React from "react";

import {Sprite} from "../sprite";

interface Props {
    sprite: string;
    data: Data;
    position: { x: number, y: number };
    step: number;
    dir: number;
}

type Data = {
    h: number;
    w: number;
};

export const Actor: React.FC<Props> = ({sprite, data, position={x:0, y:0},
                                           step = 0, dir = 0}) => {
    const dataReceived: Data = data;
    return (
        <Sprite
            image ={sprite}
            position={position}
            data = {{
                y:dir * dataReceived.h,
                x:step * dataReceived.w,
                h: dataReceived.h,
                w: dataReceived.w,
            }}
        />
    );
};