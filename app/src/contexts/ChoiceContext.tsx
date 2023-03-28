import { createContext, useReducer } from "react"


export type Choice = "addHeading" | "addTitle" | "addLink" | "addParagraph" | "addImage" | "addVideo" | "addAudio" | "addEmbed" | "addSection" | "close" | "addDivider"

type ChoiceState = Choice | undefined
export const InititialChoiceState: ChoiceState = undefined

export enum ChoiceActions {
    "addHeading" = "addHeading",
    "addTitle" = "addTitle",
    "addLink" = "addLink",
    "addParagraph" = "addParagraph",
    "addImage" = "addImage",
    "addVideo" = "addVideo",
    "addAudio" = "addAudio",
    "addEmbed" = "addEmbed",
    "addSection" = "addSection",
    "addDivider" = "addDivider",
    "close" = "close",
}

type Action = {
    type: ChoiceActions
}
export function CreateChoiceReducer(state: ChoiceState, action: Action) {
    switch (action.type) {
        case ChoiceActions.addHeading: return action.type
        case ChoiceActions.addTitle: return action.type
        case ChoiceActions.addLink: return action.type
        case ChoiceActions.addParagraph: return action.type
        case ChoiceActions.addAudio: return action.type
        case ChoiceActions.addVideo: return action.type
        case ChoiceActions.addImage: return action.type
        case ChoiceActions.addEmbed: return action.type
        case ChoiceActions.addSection: return action.type
        case ChoiceActions.addDivider: return action.type
        case ChoiceActions.close: return action.type
        default: return state
    }
}
type Context = {
    choice: ChoiceState,
    choiceDispatch: React.Dispatch<Action>
}
export const ChoiceContext = createContext<Context>({
    choice: "close",
    choiceDispatch: () => null
})

export const ChoiceProvider = ({ children }: { children: JSX.Element }) => {
    const [choice, choiceDispatch] = useReducer(CreateChoiceReducer, InititialChoiceState)
    return (
        <ChoiceContext.Provider value={{ choice, choiceDispatch }}>
            {children}
        </ChoiceContext.Provider>
    )
}