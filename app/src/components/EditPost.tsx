import React, { useContext } from "react";
import { PostContext, SectionTypes } from "../contexts/PostContext";
import ParagraphSection from "./ParagraphSection";
import TitleSection from "./TitleSection";


export default function EditPost() {
    const { post } = useContext(PostContext)
    console.log(post)
    return (<>
        {post.map((section, index) => {
            return (
                <React.Fragment key={index}>
                    {section.type === SectionTypes.title ? <TitleSection section={section} /> : null}
                    {section.type === SectionTypes.paragraph ? <ParagraphSection section={section} /> : null}
                </React.Fragment>
            )
        })}
    </>)
}
