import { useState } from "react";

function CreateWordScreen(props) {
	const [newWordInfo, setNewWordInfo] = useState({
		category: "",
		word: "",
	});

	const updateState = (event) => {
		const { name, value } = event.target;
		setNewWordInfo((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const onCreate = () => {
		if (newWordInfo.category.length + newWordInfo.word.length >= 2) {
			props.setWordInfo(newWordInfo);
			props.onHangmanStartTwoPlayer();
			setNewWordInfo({
				category: "",
				word: "",
			});
		}
	};

	return (
		<div className="flex flex-col gap-6">
			<p className="text-center text-white text-4xl">Create Word</p>
			<input
				type={"text"}
				placeholder="Enter your category here..."
				name="category"
				onChange={updateState}
				value={newWordInfo.category}
				className="w-80 rounded-lg px-2 h-10 text-lg bg-blue-200 outline-none border-2 border-blue-300 focus:border-blue-600"
			/>
			<input
				type={"password"}
				placeholder="Enter your word here..."
				name="word"
				onChange={updateState}
				value={newWordInfo.word}
				className="w-80 rounded-lg px-2 h-10 text-lg bg-blue-200 outline-none border-2 border-blue-300 focus:border-blue-600"
			/>
			<button
				onClick={onCreate}
				className="bg-green-400 h-12 rounded-xl text-white hover:bg-green-500 active:bg-green-700"
			>
				Create
			</button>
		</div>
	);
}

export default CreateWordScreen;
