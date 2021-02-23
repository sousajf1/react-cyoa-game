import React from "react";
import {Map} from "../map";
import {Player} from "../player";

export const World = () => {
    return (<div
            style={{
                position: "relative",
                width: "800px",
                height: "400px",
                margin: "20px auto"
            }}>
           <Map />
           <Player />
        </div>
    )
};