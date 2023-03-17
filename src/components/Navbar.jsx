import React, { useState } from "react";
import { motion } from "framer-motion";
import { logo, menu, close } from "../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { user, logOut } = UserAuth();
	// console.log(user.email)
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav
			className={
				user?.email
					? "flex fixed inset-x-0 items-center justify-between py-6 px-16 z-[100] transition-all duration-700 max-[539px]:px-6 max-[500px]:py-4  bg-[#000000]"
					: "flex fixed inset-x-0 items-center justify-between py-6 px-16 z-[100] transition-all duration-700 max-[539px]:px-6 max-[500px]:py-4  bg-[#000000]   backdrop-filter backdrop-blur-xl  bg-opacity-[0.5]"
			}
		>
			<Link to='/'>
				<img
					src={logo}
					alt='logo'
					className='w-[140px] h-[40px] cursor-pointer max-[490px]:w-[124px] max-[490px]:h-[32px]'
				/>
			</Link>

			<hr className=' border-[px] border-white  w-[60%] max-[1223px]:hidden' />
			{user?.email ? (
				<div className=' max-[700px]:hidden items-center flex'>
					<Link to='/dashboard'>
                        {user?.email ? (
                          <button className=' text-white pr-4 cursor-pointer '>
							<img
						src={
							user.photoURL
								? user.photoURL
								: "https://www.getillustrations.com/photos/pack/video/55895-3D-AVATAR-ANIMATION.gif"
						}
						alt='profile-pic'
						className=' rounded-full h-[30px] w-[30px] border-[2px] border-white'
					/>
						</button>  
                        ) : (<button className=' text-white pr-4 cursor-pointer '>
                        <FaRegUser />
                    </button>)}
						
					</Link>

					<button
						onClick={handleLogout}
						className=' rounded-full text-black bg-white hover:bg-[#000000] hover:text-white transition-all duration-300 px-4 py-2 cursor-pointer flex items-center'
					>
						Logout &nbsp; <FiLogOut />
					</button>
				</div>
			) : (
				<div className=' max-[700px]:hidden items-center'>
					<Link to='/signin'>
						<button className=' text-white pr-4 cursor-pointer '>
							Sign in
						</button>
					</Link>
					<Link to='/signup'>
						<button className=' rounded-full text-black bg-white hover:bg-[#000000] hover:text-white transition-all duration-300 px-4 py-2 cursor-pointer'>
							Sign up
						</button>
					</Link>
				</div>
			)}

			{/* sidebar */}
			<div className='hidden max-[700px]:flex flex-1 justify-end items-center'>
				<motion.img
					whileTap={{ scale: 1.3 }}
					src={toggle ? close : menu}
					alt='menu'
					className='w-[22px] h-[22px] object-contain'
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`${
						!toggle ? "hidden" : "block"
					} p-6  absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar bg-black z-[50]`}
				>
					{user?.email ? (
						<div className='flex-col  flex'>
							<Link to='/dashboard'>
								<motion.button
									onClick={close}
									whileTap={{ scale: 1.3 }}
									className=' text-white pr-4 cursor-pointer '
								>
										<img
						src={
							user.photoURL
								? user.photoURL
								: "https://www.getillustrations.com/photos/pack/video/55895-3D-AVATAR-ANIMATION.gif"
						}
						alt='profile-pic'
						className=' rounded-full h-[30px] w-[30px] border-[2px] border-white'
					/>
								</motion.button>
							</Link>
							<h3 className='text-white'>{user.email}</h3>

							<button
								onClick={handleLogout}
								className=' rounded-full mt-10 text-black bg-white hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 cursor-pointer flex items-center justify-between'
							>
								Logout &nbsp;
								<FiLogOut />
							</button>
						</div>
					) : (
						<div className='flex-col items-center'>
							<Link to='/signin'>
								<button
									onClick={close}
									className=' text-white pr-4 cursor-pointer '
								>
									Sign in
								</button>
							</Link>
							<Link to='/signup' onClick={close}>
								<button className=' rounded-full text-black bg-white hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 cursor-pointer'>
									Sign up
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
