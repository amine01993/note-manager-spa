import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import './App.scss';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import NoteContent from './components/NoteContent.tsx';
import type { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>();

function App() {
	const [notes, setNotes] = useState<Array<Schema["Note"]["type"]>>([]);
	const [selectedNote, ] = useState<Schema["Note"]["type"]>();

	useEffect(() => {
	  client.models.Note.observeQuery().subscribe({
		next: (data) => {
			console.log('data', data);
			setNotes([...data.items]);
			console.log('notes', notes);
		},
	  });
	}, []);
  
	function createNote() {
	  client.models.Note.create({ title: 'Note title', content: 'Note content' });
	}

	return (
		<>
			<Header />
			<Sidebar {...notes} />
			{selectedNote && <NoteContent {...selectedNote} />}
			<button onClick={createNote}>Create Note</button>
		</>
	)
}

export default App;
