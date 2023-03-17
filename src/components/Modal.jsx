// import React, { useState } from "react";
// import { VscClose } from "react-icons/vsc";
// import { motion } from "framer-motion";
// import { db } from "../firebase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import { UserAuth } from "../context/AuthContext";

// const Modal = ({ open, onClose }) => {
// 	const [input, setInput] = useState("");
// 	const [desc, setDesc] = useState("");
// 	const { user } = UserAuth();
// 	const noteDesk = doc(db, "users", `${user?.email}`);

// 	const createNote = async (e) => {
// 		e.preventDefault(e);

// 		if ((input && desc) === "") {
// 			alert("Please type in all feilds");
// 			return;
// 		}
        
// 		if (user?.email) {
// 			await updateDoc(noteDesk, {
// 				Notdesc: arrayUnion({
// 					text: input,
// 					note: desc,
// 				}),
// 			});
// 			setInput("");
// 			setDesc("");
            
// 		}
// 	};

// 	if (!open) return null;
// 	return (
// 		<div onClick={onClose} className='overlay z-[100]'>
// 			<div
// 				onClick={(e) => {
// 					e.stopPropagation();
// 				}}
// 				className=' modalConatainer px-5 py-5  z-50 resize overflow-scroll'
// 			>
// 				<form action='' onSubmit={createNote}>
// 					<div className=' flex justify-between items-center'>
// 						<div className=''>
// 							<label htmlFor='title' className=' '>
// 								Title
// 							</label>
// 							<div>
// 								<input
// 									maxlength='20'
// 									value={input}
// 									onChange={(e) => setInput(e.target.value)}
// 									type='text'
// 									className='mt-1 w-full border-[#41414145] hover:border-[#3c67a7a7] transition-all  duration-500 border-[1px] rounded-[10px] outline-none px-4 py-2 placeholder:capitalize font-cascadiaCode'
// 								/>
// 							</div>
// 						</div>
// 						<motion.div
// 							whileTap={{ scale: 1.3 }}
// 							onClick={onClose}
// 							className=' bg-black border-[2px] border-white text-white p-1 rounded-full ml-6'
// 						>
// 							<VscClose
// 								size={15}
// 								className=' hover:rotate-180  transition-all duration-300'
// 							/>
// 						</motion.div>
// 					</div>
// 					<div className='mt-6'>
// 						<label htmlFor='notes' className=' text-start'>
// 							Note
// 						</label>
// 						<div>
// 							<textarea
								
// 								value={desc}
// 								onChange={(e) => setDesc(e.target.value)}
// 								name='notes'
// 								id=''
// 								cols='30'
// 								rows='50'
// 								className='mt-1 border-[#41414100] hover:border-[#3c67a700] outline-none border-[1px] px-4 py-4 h-[70vh] bg-[#f4f4f4] font-cascadiaCode'
// 							></textarea>
// 						</div>
// 					</div>
// 					<button  className=' bg-[#121212] text-white capitalize px-2 py-2 rounded-xl mt-2'>
// 						add note
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Modal;
