import { ChangeEvent, useState } from "react"

export const useInput = (initialValue:string="") => {
    const [inputValue, setInputValue] = useState<string>(initialValue);
    
    const inputChangeHandler = (event:any) => {
        setInputValue(event.target.value)
    }

    return {inputValue, inputChangeHandler}
}