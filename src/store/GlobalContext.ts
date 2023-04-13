import { Context, createContext } from "react";
import { ReducerAction, SiteContext } from "../config/types";

const GlobalContext:Context<SiteContext> = createContext({
    state: {},
    dispatch: (value: ReducerAction) => {return}
});

export default GlobalContext;