import {useEffect} from "react";

export const useKeyPress = (fn: { (e: KeyboardEvent): void;
    (this: Window, ev: KeyboardEvent): any;
    (this: Window, ev: KeyboardEvent): any; }) => {
        useEffect(() => {
            window.addEventListener("keydown", fn);
            return () => window.removeEventListener("keydown", fn);
        }, [fn])
}