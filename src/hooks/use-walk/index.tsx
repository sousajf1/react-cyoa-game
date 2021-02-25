import {useState} from "react";
import {MAP_HEIGHT} from "../../config/constants";
import {MAP_WIDTH} from "../../config/constants";

export const useWalk = (maxSteps: number) => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    const directions = {
        "down": 0,
        "left": 1,
        "right": 2,
        "up": 3,
    };

    const stepSize = 16;
    const modifier = {
        "down": {x: 0, y: stepSize},
        "left": {x: -stepSize, y: 0},
        "right": {x: stepSize, y: 0},
        "up": {x: 0, y: -stepSize},
    }

    const walk = (dir: string) => {
        console.dir();
        setDir(prev => {
            // @ts-ignore
            if(directions[dir] === prev) move(dir);
            // @ts-ignore
            return directions[dir];
        });
        setStep(prev =>prev < maxSteps - 1 ? prev + 1 : 0)
    }

    const move = (dir: string) => {
        setPosition(prev => {
            // @ts-ignore
            // @ts-ignore
            // @ts-ignore
            const posToCheck = {x: prev.x + modifier[dir].x,
                // @ts-ignore
                y: prev.y + modifier[dir].y,
            }

            if((posToCheck.x <= MAP_WIDTH - 32 && posToCheck.x >= 0)
                && (posToCheck.y <= MAP_HEIGHT - 32 && posToCheck.y>= 0)){
                return {x: posToCheck.x,
                    y: posToCheck.y,
                };
            }else{
                return {x: prev.x, y: prev.y};
            }
        })
    }
    return{
        walk,dir, step, position
    }
};