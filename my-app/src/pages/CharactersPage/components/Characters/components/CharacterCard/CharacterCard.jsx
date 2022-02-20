import React from 'react'
import { useModal } from '../../../../../../hooks/hooks';
import c from "./CharacterCard.module.scss"
import { Modal } from './components/Modal/Modal';

    export const  CharacterCard = ({character})=> {
        const [isShowing, toggle] = useModal(false) 
        return (
    
                <div className={c.card} onClick={(e)=>{e.preventDefault(); toggle(true)}}>
                    <div className={c.name}>{character.name}</div>
                        <img  className={c.image} src={character.image} alt={character.name}/>
                        <Modal isShowing={isShowing} hide={toggle}  character={character}/>
                </div>
        )
    }
