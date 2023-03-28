import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface BoardUser {
    name: string
    profilePic: string
}


export interface VisibilityOption {
    name: string
    icon: IconDefinition,
    description: string
}