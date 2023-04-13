import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Dispatch } from "react"

export interface BoardUser {
    name: string
    profilePic: string
}

export interface VisibilityOption {
    name: string
    icon: IconDefinition,
    description: string
}

export interface ReducerAction {
    type: string,
    payload: any
}

export interface SiteContext {
    state: any
    dispatch: Dispatch<ReducerAction>
}