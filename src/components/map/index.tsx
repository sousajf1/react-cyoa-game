import React from "react";
import './styles.css';


interface Props1{
    tiles: number[][];
}
interface Props2{
    tiles: number[];
}
interface Props3{
    value: number;
}

export const getTileSprite = (value: number) => {
    switch (value as any){
        case 0:
            return 'grass';
        case 1:
            return 'rock';
    }
}



export const MapTile: React.FC<Props3> =({value}) => {
    const val = value;
    return <div className={`tile ${getTileSprite(val)}`}
    style={{
        height: "33px",
        width: "32px",
    }}/>
}

export const MapRow: React.FC<Props2> = ({tiles}) => {
    return <div className="row">
        {
            tiles.map(tile => <MapTile value={tile}/>)
        }
    </div>
}

export const Map: React.FC<Props1> = ({tiles}) => {
    return <div
        style={{
            position: "relative",
            width: "800px",
            height: "400px",
            margin: "20px auto",
            backgroundColor: "#fff59d",
        }}>
        {
            tiles.map(row => <MapRow tiles={row} />)
        }
    </div>
};