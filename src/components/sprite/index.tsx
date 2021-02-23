import React from "react";

type Data = {
    y: number;
    x: number;
    h: number;
    w: number;
};
interface Props {
    image: string;
    data: Data;
    position: {x: number, y: number};

}

export const Sprite: React.FC<Props> = ({image, data, position}) => {
    const {y , x , h, w } = data;
    return <div
        style={{
            position:"absolute",
            top: position.y,
            left: position.x,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x}px -${y}px`
        }}/>
};