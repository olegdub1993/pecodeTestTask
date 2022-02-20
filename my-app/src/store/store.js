import { configureStore} from "@reduxjs/toolkit"
import charactersSlice from "../features/characters/charactersSlice";
import  watchListSlice  from './../features/watchList/watchListSlice';

export const store= configureStore({
    reducer:{
       characters: charactersSlice,
       watchList: watchListSlice
    }
})