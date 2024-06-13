import { useState } from "react";
import axios from "../api/axios";
import Navbar from "../Components/Navbar";

const Report = () => {
	const [selectedMonth, setSelectedMonth] = useState("");
	const [selectedYear, setSelectedYear] = useState("");

	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};

	const handleDownload = async () => {
		if (!selectedMonth || !selectedYear) return;

		try {
			const response = await axios.get(
				`/report/${selectedYear}/${selectedMonth}`,
				{
					responseType: "blob",
					headers: {
						Accept: "application/json, text/plain, */*",
					},
				}
			);

			console.log(response);

			// const url = window.URL.createObjectURL(new Blob([response.data]));

			// const link = document.createElement("a");
			// link.href = url;
			// link.setAttribute("download", "filename.xlsx");
			// document.body.appendChild(link);

			// link.click();

			// link.parentNode.removeChild(link);
			// window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Error downloading file:", error);
		}
	};
	return (
		<div className='flex flex-col h-screen'>
			<Navbar />
			<div className='flex flex-col items-center p-4 bg-gray-200 rounded-md shadow-md'>
				<h2 className='text-lg font-bold mb-4'>Select Month and Year</h2>
				<div className='flex items-center mb-4'>
					<label htmlFor='month' className='mr-2'>
						Month:
					</label>
					<select
						id='month'
						value={selectedMonth}
						onChange={handleMonthChange}
						className='border border-gray-400 rounded-md px-2 py-1'
					>
						<option value=''>Select Month</option>
						<option value='01'>January</option>
						<option value='2'>February</option>
						<option value='March'>March</option>
						<option value='April'>April</option>
						<option value='May'>May</option>
						<option value='June'>June</option>
						<option value='July'>July</option>
						<option value='August'>August</option>
						<option value='September'>September</option>
						<option value='October'>October</option>
						<option value='November'>November</option>
						<option value='December'>December</option>
					</select>
				</div>
				<div className='flex items-center mb-4'>
					<label htmlFor='year' className='mr-2'>
						Year:
					</label>
					<select
						id='year'
						value={selectedYear}
						onChange={handleYearChange}
						className='border border-gray-400 rounded-md px-2 py-1'
					>
						<option value=''>Select Year</option>
						<option value='2022'>2022</option>
						<option value='2023'>2023</option>
						<option value='2024'>2024</option>
					</select>
				</div>
				<button
					onClick={handleDownload}
					disabled={!selectedMonth || !selectedYear}
					className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
						(!selectedMonth || !selectedYear) && "opacity-50 cursor-not-allowed"
					}`}
				>
					Download
				</button>
			</div>
		</div>
	);
};

export default Report;
