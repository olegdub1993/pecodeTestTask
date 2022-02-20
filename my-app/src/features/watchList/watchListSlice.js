import {createSlice,} from "@reduxjs/toolkit"


const initialState={
 watchList:[],
}

export const watchListSlice=createSlice({
    name:"watchList",
    initialState,
    reducers:{
        setWatchList:(state, action)=>{
            state.watchList=action.payload
            
        },
        addItem:(state, action)=>{
            state.watchList=[...state.watchList,action.payload]
            localStorage.setItem("watchList", JSON.stringify(state.watchList));
        },
        removeItem:(state, action)=>{
            state.watchList=state.watchList.filter((i)=>i.id !== action.payload)
            localStorage.setItem("watchList", JSON.stringify(state.watchList));
        },
        toggleChecked:(state, action)=>{
            state.watchList=state.watchList.map((i)=>{
                if(i.id === action.payload.id){ return({...i, checked:action.payload.checked})};
                return i
            },)
            localStorage.setItem("watchList", JSON.stringify(state.watchList));
        }
    },
})
export const {setWatchList} = watchListSlice.actions
export const {addItem} = watchListSlice.actions
export const {removeItem} = watchListSlice.actions
export const {toggleChecked} = watchListSlice.actions
export default watchListSlice.reducer