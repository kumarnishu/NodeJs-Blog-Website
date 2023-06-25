import { useContext, useEffect } from "react";
import { PostContext, Section, SectionTypes } from "../contexts/PostContext";
import TitleSection from "./TitleSection";

type Props = {
    defaultSection: Section
}
export default function CreatePost() {
   return <TitleSection section={null}/>
}