import React from "react";

const UserCard = ({ name, email, position }) => {
	return (
		<div className='flex gap-x-5 bg-white w-[31%] rounded-lg'>
			<div className='flex w-5 h-5 bg-[#64C5C3] my-auto ml-4'></div>
			<div className='flex flex-col'>
				<h4 className='text-[12px] mt-2 font-semibold'>{name}</h4>
				<p className='text-[10px] text-gray-500'>{email}</p>
				<p className='text-[10px] my-2'>{position}</p>
			</div>
		</div>
	);
};

export default UserCard;
