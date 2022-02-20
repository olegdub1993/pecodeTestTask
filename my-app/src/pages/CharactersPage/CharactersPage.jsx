import React from 'react'
import c from "./CharactersPage.module.scss"
import { useEffect, useState } from 'react';
import { getCharacters } from '../../features/characters/charactersSlice';
import { useDispatch, useSelector  } from 'react-redux';
import { Characters } from './components/Characters/Characters';
import { Container } from '../../components/Container/Container';
import { Pagination } from '../../components/Pagination/Pagination';
import { Select } from '../../components/UI/Select/Select';
import { Input } from '../../components/UI/Input/Input';

    export const  CharactersPage= ()=> {
      const [activePage,setActivePage]=useState(1)
      const [species, setSpecies]=useState("")
      const genderOptions=["female", "male", "genderless","unknown"] 
      const [gender, setGender] = useState("Gender");
      const statusOptions=["alive", "dead", "unknown"] 
      const [status, setStatus] = useState("Status");
      const characters= useSelector((state)=>state.characters.characters)
      const pageCount= useSelector((state)=>state.characters.info.pages)
      const dispatch= useDispatch()

      const onChangePageHandler=(event)=>{
          setActivePage(event.selected+1)
      }

     useEffect(()=>{
      dispatch(getCharacters({pageNumber:activePage, gender, status}))
     },[activePage,]) 

    const setGenderHandler =(gender)=>{
        setGender(gender)
        dispatch(getCharacters({pageNumber:1, gender, status,species}))
    }
    const setStatusHandler =(status)=>{
        setStatus(status)
        dispatch(getCharacters({pageNumber:1, gender, status,species}))
    }
    const setSpeciesHandler =(species)=>{
        setSpecies(species)
        dispatch(getCharacters({pageNumber:1, gender, status,species}))
    }
        return (
            <Container>
                    <div className={c.page}>
                            <div className={c.filterContainer}>
                                <div>
                                 <Input className={c.input} placeholder='Spacies'  onChange={setSpeciesHandler} value={species}/>
                                 </div>
                                 <Select  options={genderOptions} className={`${c.select}`} setSelectedOption={setGenderHandler} selectedOption={gender}/>
                                 <Select  options={statusOptions} className={`${c.select}`} setSelectedOption={setStatusHandler} selectedOption={status}/>
                            </div>
                            <Characters characters={characters}/>
                        <div >
                            <Pagination pageCount={pageCount}  handlePageClick={onChangePageHandler}/>
                        </div>
                    </div>
           </Container>
        )
    }
