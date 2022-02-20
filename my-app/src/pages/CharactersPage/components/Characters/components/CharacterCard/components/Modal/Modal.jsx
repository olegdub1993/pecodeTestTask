import React  from 'react';
import c from "./Modal.module.scss";

import { CloseIcon } from './../../../../../../../../components/svg/svg';
import { ModalContainer } from '../../../../../../../../components/ModalContainer/ModalContainer';

export const Modal = ({isShowing, hide, character}) => {
    return (<ModalContainer  isShowing={isShowing}  > 
                        <div className={c.content}>
                            <div onClick={(e)=>{ e.stopPropagation(); hide(false)}} className={c.close}><CloseIcon /></div>
                             <div><img  className={c.image} src={character.image} alt={character.name}/></div>
                                <div className={c.properties}>
                                    <div className={c.name}>{character.name}</div>
                                    <div>Status: {character.status}</div>
                                    <div>Species: {character.species}</div>
                                    <div>Gender: {character.gender}</div>
                                    <div>Type: {character.type}</div>
                                    <div>Origin name: {character.origin.name}</div>
                                    <div>  Location: {character.location.name}</div>
                                </div>
                        </div>
           </ModalContainer>
    )
}
