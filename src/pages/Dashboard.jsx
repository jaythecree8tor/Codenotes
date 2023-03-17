import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
	const [notes, setNotes] = useState(
		localStorage.notes ? JSON.parse(localStorage.notes) : []
	);
	const [activeNote, setActiveNote] = useState(false);
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);
	const onAddNote = () => {
		const newNote = {
			id: uuid(),
			title: "Untitled Note",
			body: "",
			lastModified: Date.now(),
		};

		setNotes([newNote, ...notes]);
		setActiveNote(newNote.id);
	};

	const onDeleteNote = (noteId) => {
		setNotes(notes.filter(({ id }) => id !== noteId));
	};

	const onUpdateNote = (updatedNote) => {
		const updatedNotesArr = notes.map((note) => {
			if (note.id === updatedNote.id) {
				return updatedNote;
			}

			return note;
		});

		setNotes(updatedNotesArr);
	};

	const getActiveNote = () => {
		return notes.find(({ id }) => id === activeNote);
	};

	return (
		<div className='max-[940px]:px-2 flex px-8 max-[940px]:flex-col max-[940px]:justify-center scroll-smooth'>
			<Sidebar
				notes={notes}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>

			<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />

			{/*  */}
		</div>
	);
};

export default Dashboard;
