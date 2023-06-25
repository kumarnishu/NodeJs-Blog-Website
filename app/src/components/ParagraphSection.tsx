import styled from "styled-components";
import { Section } from "../contexts/PostContext"
import { useEffect, useRef } from "react";

type Props = {
    section: Section | null,
}

const TextInput = styled.h1`
  word-break: break-all;
  width:100%;
  border: none;
  outline: none
`;

export default function ParagraphSection({ section }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    return (
        <>
            <TextInput
                ref={inputRef}
                contentEditable
                suppressContentEditableWarning
            >{section?.value}</TextInput>
        </>
    )
}