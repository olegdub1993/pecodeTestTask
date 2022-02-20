import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { characterAPI } from "../../api/api"

const initialState={
 characters:[],
 info:{}
}
export const  getCharacters= createAsyncThunk(
    "characters/getCharacters",
    async ( data, { rejectWithValue, dispatch })=>{
        const response= await characterAPI.getCharacters(data)
        dispatch(setCharacters(response.data.results))
        dispatch(setInfo(response.data.info))
    })
export const charactersSlice=createSlice({
    name:"characters",
    initialState,
    reducers:{
        setCharacters:(state, action)=>{
            state.characters=action.payload
        },
        setInfo:(state, action)=>{
            state.info=action.payload
        }
    },
})
export const {setCharacters} = charactersSlice.actions
export const {setInfo} = charactersSlice.actions
export default charactersSlice.reducer