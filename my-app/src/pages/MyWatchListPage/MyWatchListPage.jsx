import React, { useEffect,useState } from 'react'
import { Container } from '../../components/Container/Container'
import { useDispatch, useSelector  } from 'react-redux';
import { addItem, removeItem, setWatchList, toggleChecked } from '../../features/watchList/watchListSlice';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../components/UI/Button/Button';
import { EpisodeItem } from './components/EpisodeItem/EpisodeItem';
import { Input } from '../../components/UI/Input/Input';
import c from "./MyWatchListPage.module.scss"

export const MyWatchListPage = () => {
    const watchList= useSelector((state)=>state.watchList.watchList)
    const [value, setValue]=useState("")
    const dispatch= useDispatch() 

    const addHandler=()=>{
        dispatch(addItem({id:uuidv4(),text:value, checked:false}))
        setValue("")
    }
    const removeHandler=(id)=>{
        dispatch(removeItem(id))
    }
    const checkedHandler=(id,checked)=>{
        dispatch(toggleChecked({id, checked}))
    }

    useEffect(()=>{
         const watchList = JSON.parse(localStorage.getItem("watchList"));
         if(watchList) { dispatch(setWatchList(watchList))}
       },[])

            return (
                <Container>
                        <div className={c.listPage}>
                            <div className={c.formContainer}>
                                    <Input className={c.input} placeholder='Write episode'  onChange={setValue} value={value}/>
                                    <Button disabled={!value} className={c.btn} onClickHandle={addHandler}>Add Episode</Button>
                            </div>
                            <div >
                                {watchList?.map((item)=><EpisodeItem  key={item.id} item={item}  removeHandler={removeHandler} checkedHandler={checkedHandler}/>)}
                            </div>
                      </div>
                </Container>
            )
}
