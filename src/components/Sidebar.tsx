
import type { Schema } from "../../amplify/data/resource";

export default function Sidebar(notes: Array<Schema['Note']['type']>) {

    return (
        <div>
            {notes.map(note => (
                <div>{note.title}</div>
            ))}
        </div>
    );
}
