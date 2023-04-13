import { Reducer } from "react"
import { ReducerAction } from "../config/types"

export const initialState:any = {
    isLoading: false,
    isLoggedIn: false,
}

export const GlobalReducer:Reducer<any, ReducerAction> = (prevState:any = initialState, action:ReducerAction ) => {
    switch(action.type) {
    }
}