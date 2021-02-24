import React from "react";
import './styles.css';


interface TilesMatrix{
    tiles: number[][];
}
interface TilesArray{
    tiles: number[];
}
interface Tile{
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



export const MapTile: React.FC<Tile> =({value}) => {
    const val = value;
    return <div className={`tile ${getTileSprite(val)}`}
    style={{
        height: "33px",
        width: "32px",
    }}/>
}

export const MapRow: React.FC<TilesArray> = ({tiles}) => {
    return <div className="row">
        {
            tiles.map(tile => <MapTile value={tile}/>)
        }
    </div>
}

export const Map: React.FC<TilesMatrix> = ({tiles}) => {
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