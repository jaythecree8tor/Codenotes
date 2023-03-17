import React, { useState } from "react";
import {
	AiFillFileMarkdown,
	AiFillStar,
	AiOutlineShareAlt,
	AiOutlineTwitter,
} from "react-icons/ai";
import Markdown from "./Markdown";
const Main = ({ activeNote, onUpdateNote }) => {
	const [openModal, setOpenModal] = useState(false);
	const onEditField = (key, value) => {
		onUpdateNote({
			...activeNote,
			[key]: value,
			lastModified: Date.now(),
		});
	};
	if (!activeNote)
		return (
			<div className=' w-full h-screen text-center text-[40px] items-center justify-center'>
				<h1 className=' mt-32'>No note selected</h1>
			</div>
		);

	return (
		<div className='h-[100vh] px-6 max-[940px]:px-2 w-[70%] max-[940px]:w-full'>
			<div className=' pt-28 pb-6 main'>
				<input
					maxLength={30}
					value={activeNote.title}
					onChange={(e) => onEditField("title", e.target.value)}
					type='text'
					id='title'
					title='Title'
					autoFocus
					className='w-full flex border-[1px] border-[#00000037] font-cascadiaCode text-[18px] text-black px-2 capitalizeb py-2 capitalize  rounded-2xl mt-1 font-bold'
				/>
				<textarea
					title='note'
					value={activeNote.body}
					onChange={(e) => onEditField("body", e.target.value)}
					name='note'
					id='body'
					cols='30'
					rows='10'
					placeholder='write your note here...'
					className='scrollbar-track-black scrollbar-thin mt-4 focus:outline-none bg-[#1e1e1e] p-4 font-cascadiaCode max-[940px]:text-[11px] h-[70vh] resize-none text-white'
				></textarea>
			</div>
			<div className=' flex-row flex'>
				<div title='Mardown view' className=' flex-1'>
					<AiFillFileMarkdown
						onClick={() => setOpenModal(true)}
						size={25}
						color='gray'
						opacity={0.5}
						className=' hover:opacity-100 transition-all duration-300 cursor-pointer'
					/>
				</div>
				<div className='flex flex-row space-x-3'>
					<AiFillStar size={25} color='gray' opacity={0.5} />
					<AiOutlineShareAlt size={25} color='gray' opacity={0.5} />
					<AiOutlineTwitter size={25} color='gray' opacity={0.5} />
				</div>
			</div>
			<Markdown
				onClose={() => setOpenModal(false)}
				acctive={activeNote}
				update={onUpdateNote}
				open={openModal}
			/>
			{/* <div className='rounded-2xl   w-full mt-28 h-[30vh] p-4 bg-[#1d252c] overflow-y-scroll scrollbar-track-black scrollbar-thin'>
				<h1 className=' font-cascadiaCode font-bold text-[18px] bg-[#41505e] px-1 mb-4 text-[#33ced8] capitalize '>
					{activeNote.title}
				</h1>

				<ReactMarkdown className='box2 font-cascadiaCode leading-5 text-[#b7c5d3] flex-wrap '>
					{activeNote.body}
				</ReactMarkdown>
			</div> */}
		</div>
	);
};

export default Main;
