import {useState} from 'react'
import { Gamer } from "./Gamer"

export const NewGame = () => {

    const initialArr = [{}, {}]
    const [gamers, setGamers] = useState()

    return (
        <>
            <Gamer />
            <Gamer />
        </>
    )
}