import { createContext, useReducer } from "react"

type heading = string
type title = string
type paragraph = string
type image = File
type audio = File
type video = File
type embed = string
type link = string
type divider = "..."

export enum SectionTypes {
    "heading" = "heading",
    "title" = "title",
    "paragraph" = "paragraph",
    "image" = "image",
    "audio" = "audio",
    "video" = "video",
    "embed" = "embed",
    "link" = "link",
    "divider" = "divider",
}

export type Section =
    { id: number, type: SectionTypes.heading, heading: heading }
    | { id: number, type: SectionTypes.title, title: title }
    | { id: number, type: SectionTypes.paragraph, paragraph: paragraph }
    | { id: number, type: SectionTypes.image, image: image }
    | { id: number, type: SectionTypes.video, video: video }
    | { id: number, type: SectionTypes.audio, audio: audio }
    | { id: number, type: SectionTypes.divider, divider: divider }
    | { id: number, type: SectionTypes.embed, embed: embed }
    | { id: number, type: SectionTypes.link, link: link }

export type Post = Section[]

type PostState = Post

export const InititialPostState: PostState = []

export enum PostActions {
    "addHeading" = "addHeading",
    "addTitle" = "addTitle",
    "addLink" = "addLink",
    "addParagraph" = "addParagraph",
    "addImage" = "addImage",
    "addVideo" = "addVideo",
    "addAudio" = "addAudio",
    "addEmbed" = "addEmbed",
    "addDivider" = "addDivider",
}

type Action = {
    type: PostActions,
    payload: Post
}
export function CreatePostReducer(state: PostState, action: Action) {
    switch (action.type) {
        case PostActions.addHeading: return action.payload
        case PostActions.addTitle: return action.payload
        case PostActions.addLink: return action.payload
        case PostActions.addParagraph: return action.payload
        case PostActions.addAudio: return action.payload
        case PostActions.addVideo: return action.payload
        case PostActions.addImage: return action.payload
        case PostActions.addEmbed: return action.payload
        case PostActions.addDivider: return action.payload
        default: return state
    }
}
type Context = {
    post: PostState,
    postDispatch: React.Dispatch<Action>
}
export const PostContext = createContext<Context>({
    post: [],
    postDispatch: () => null
})

export const PostProvider = ({ children }: { children: JSX.Element }) => {
    const [post, postDispatch] = useReducer(CreatePostReducer, InititialPostState)
    return (
        <PostContext.Provider value={{ post, postDispatch }}>
            {children}
        </PostContext.Provider>
    )
}