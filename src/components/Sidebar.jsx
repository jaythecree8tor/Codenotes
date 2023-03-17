import React from "react";
import { UserAuth } from "../context/AuthContext";
import { VscAdd, VscTrash } from "react-icons/vsc";
import { motion } from "framer-motion";
import { colors } from "../constants";
const Sidebar = ({
	notes,
	onAddNote,
	onDeleteNote,
	activeNote,
	setActiveNote,
}) => {
	const { user } = UserAuth();
	const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

	return (
		<div className='max-[940px]:pr-0 justify-center py-28 w-[400px] max-[940px]:w-full max-[940px]:h-[70vh]  pr-8 h-[100vh] border-r-2 '>
			{/* <Banner /> */}
			<div className=' items-center text-center'>
				<div className=' justify-center flex'>
					<img
						src={
							user.photoURL
								? user.photoURL
								: "https://www.getillustrations.com/photos/pack/video/55895-3D-AVATAR-ANIMATION.gif"
						}
						alt='profile-pic'
						className=' rounded-full h-[100px] w-[100px]'
					/>
				</div>
				<h1 className='  font-cascadiaCode  text-[15px]  text-black'>
					{user.username ? user.username : user.email}
				</h1>
			</div>

			<hr className=' w-[100%] mt-6  mb-3 border-t-[2px] opacity-25 border-[#000000]' />

			{/* <Notes /> */}
			<div className=' flex-col '>
				<div className=' justify-center text-center flex'>
					<button
						onClick={onAddNote}
						className=' transition-all duration-150 hover:bg-slate-200  rounded-[30px] items-center border-[1px] bg-white border-black px-2 py-2 flex w-full font-cascadiaCode justify-between'
					>
						<div className=' flex items-center'>
							<motion.span
								whileTap={{ scale: 1.3 }}
								className='justify-center items-center  flex bg-black rounded-full mr-1'
							>
								<div title="add note" className=' bg-black   text-white p-1 rounded-full'>
									<VscAdd
										size={20}
										className='  hover:rotate-180  transition-all duration-300'
									/>
								</div>
							</motion.span>
							New note
						</div>
						{sortedNotes.length < 1 ? null : (
							<span className=' text-white bg-black px-2 py-1 rounded-full -right-3 justify-center flex items-center drop-shadow-4xl text-[12px]'>
								{`You have ${sortedNotes.length} notes`}{" "}
							</span>
						)}
					</button>
				</div>

				<div className=' notes mt-3 overflow-y-scroll px-7 scrollbar-h-6 scrollbar-track-rounded-2xl scrollbar-track-[#000000d2] scrollbar-thin max-[940px]:h-[20vh] h-[50vh]'>
					{sortedNotes.map((note, index) => (
						<div
							key={index}
							style={{ backgroundColor: colors[index % 17].noteColor }}
							onClick={() => setActiveNote(note.id)}
							className={`app-sidebar-note transition-all duration-200 relative bg-orange-400  overflow-hidden shadow-2xl py-5 px-3 rounded-[10px] border-2 border-black max-[940px]:w-full w-[300px] hover:shadow-none cursor-pointer mb-3 ${
								note.id === activeNote && "active"
							}`}
						>
							<div className=' flex justify-between items-center'>
								<h1 className=' text-white text-[12px] tracking-wider bg-black font-cascadiaCode capitalize inline-block  py-1 px-2 rounded-[8px]'>
									<strong>{note.title}</strong>
								</h1>
								<motion.button
									onClick={() => onDeleteNote(note.id)}
									whileTap={{ scale: 1.3 }}
									className=''
								>
									<VscTrash color='black' size={20} />
								</motion.button>
							</div>

							<p className=' text-[13px] pt-4'>
								{note.body && note.body.substr(0, 30) + "..."}
							</p>

							<p className=' text-[10px] '>
								Last modified{" "}
								{new Date(note.lastModified).toLocaleDateString("en-GB", {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
