
import { useRef } from "react";
import type { Schema } from "../../amplify/data/resource";


export default function NoteContent({content}: Schema["Note"]["type"]) {

    const text = useRef(null);
    return (
        <div className="note-content">
            <textarea ref={text} defaultValue={content ?? ''}></textarea>
        </div>
    )
}