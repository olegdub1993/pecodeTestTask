import React from 'react'
import { Button } from '../../../../components/UI/Button/Button'
import c from "./EpisodeItem.module.scss"
import { Checkbox } from '../../../../components/UI/Checkbox/Checkbox';
export const EpisodeItem = ({item, removeHandler, checkedHandler}) => {
  return (
    <div className={c.item}>
            <div>{item.text}</div>
            <div className={c.container}>
                <Checkbox  checked={item.checked} id={item.id} onChange={(e)=>{checkedHandler(item.id, e.currentTarget.checked)}}  />
                <Button className={c.btn} onClickHandle={()=>removeHandler(item.id)}>Remove</Button>
            </div>
    </div>
  )
}
