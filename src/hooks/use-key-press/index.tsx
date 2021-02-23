import {useEffect} from "react";

export default function useKeyPress(fn: { (e: KeyboardEvent): void; (this: Window, ev: KeyboardEvent): any; (this: Window, ev: KeyboardEvent): any; }) {
    useEffect(() => {
        window.addEventListener("keydown", fn);
        return () => window.removeEventListener("keydown", fn);
    }, [fn])
}