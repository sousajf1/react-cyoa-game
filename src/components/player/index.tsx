import React from "react";
import {Actor} from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player() {
    const {dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32,
    };

    useKeyPress((e: KeyboardEvent) => {
        walk(e.key.replace("Arrow", "").toLowerCase());
        e.preventDefault();
    })
    const img: string = "./images/m1.png";
    return <Actor sprite={img} data={data} step={step} dir={dir} position={position}/>
}