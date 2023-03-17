import React from "react";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
const Markdown = ({ acctive, open, onClose }) => {
	if (!open) return null;
	return (
		<div onClick={onClose} className='overlay z-[100]'>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='modalConatainer bg-[#1e1e1e]  px-5 py-5 z-50 resize overflow-scroll'
			>
				<form action=''>
					<div className=' flex justify-between items-center'>
						<h1 className=' font-cascadiaCode font-bold text-[18px] bg-[#41505e] px-1 mb-4 text-[#33ced8] capitalize '>
							{acctive.title}
						</h1>
						<motion.div
							whileTap={{ scale: 1.3 }}
							onClick={onClose}
							className=' bg-black border-[2px] border-white text-white p-1 rounded-full ml-6'
						>
							<VscClose
								size={15}
								className=' hover:rotate-180  transition-all duration-300'
							/>
						</motion.div>
					</div>
					<div className='mt-6'>
						<div>
							<ReactMarkdown className='box2 font-cascadiaCode leading-5 text-[#ffffff] flex-wrap '>
								{acctive.body}
							</ReactMarkdown>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Markdown;
