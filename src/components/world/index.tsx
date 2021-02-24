import React from "react";
import {Map} from "../map";
import {Player} from "../player";
import {tiles} from "../../config/maps";

export const World = () => {
    // @ts-ignore
    return <div
            style={{
                position: "relative",
                width: "800px",
                height: "400px",
                margin: "20px auto"
            }}>

           <Map tiles={tiles} />
           <Player />
        </div>
};