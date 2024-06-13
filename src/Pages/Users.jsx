import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Navbar from "../Components/Navbar";
import UserMenuCard from "../Components/UserMenuCard";
import axios from "../api/axios";
import UserCard from "../Components/UserCard";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get("/admin/users", {
					headers: { "Content-Type": "application/json" },
					withCredentials: true, // Include credentials if needed
				});
				// Step 3: Store the response data in the users state
				setUsers(response.data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchUsers();
	}, []);

	console.log(users);

	function openAddUserForm() {
		navigate("/add-user");
	}

	return (
		<div className='bg-gradient-to-bl overflow-x-hidden from-[#d8e7f5] to-[#afcce700] h-screen'>
			<Navbar />
			<div className='flex w-screen'>
				<UserMenuCard />
				<div className='w-full mt-6'>
					<div className='flex justify-between ml-10 mr-14'>
						<span className='font-bold'>User Management</span>
						<button
							className='bg-[#2F3C48] rounded-md text-[14px] text-white px-4'
							onClick={openAddUserForm}
						>
							+Add User
						</button>
					</div>
					<div className='flex flex-wrap mx-10 mt-6 gap-4 mb-10'>
						{users.users &&
							users.users.map((user) => (
								<UserCard
									key={user.id}
									name={user.first_name + " " + user.last_name}
									email={user.email}
									position={user.position}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
