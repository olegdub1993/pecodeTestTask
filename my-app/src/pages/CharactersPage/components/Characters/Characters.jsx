import React from 'react'
import c from "./Characters.module.scss"
import { CharacterCard } from './components/CharacterCard/CharacterCard';


    export  function Characters({characters}) {
      const charactersJSX= characters?.map((item)=><CharacterCard key={item.id} character={item}/>)
            return (
                    <div className={c.container}>
                      {charactersJSX}
                    </div>
            )
    }
