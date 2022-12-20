import { useState, useEffect } from "react";

function HangmanScreen(props) {
	const [wordSplit, setWordSplit] = useState([]);
	const [hiddenWord, setHiddenWord] = useState("");
	const [wordInput, setWordInput] = useState("");

	useEffect(() => {
		setHiddenWord("");
		setWordSplit([...props.word]);
		[...props.word].forEach((element) => {
			setHiddenWord((prev) => prev + "_");
		});
	}, []);

	const changeWordInput = (event) => {
		let textInput = event.target.value;
		let textInputLower = textInput.toLowerCase();
		setWordInput(textInputLower);
	};

	const onEnter = () => {
		let tempHiddenWord = hiddenWord;
		let tempHiddenWordSplit = [...tempHiddenWord];
		if (wordInput.length !== 0) {
			if (wordInput.length === 1) {
				wordSplit.forEach((value, index) => {
					if (value === wordInput) {
						tempHiddenWordSplit[index] = wordInput;
						setHiddenWord(tempHiddenWordSplit.join(""));
					}
				});
			}
		}
	};

	return (
		<div className="flex flex-col mt-[-50px] items-center">
			<p className="text-white text-4xl">Category: {props.category}</p>
			<p className="text-white text-6xl text-center tracking-widest">
				{hiddenWord}
			</p>

			<div className="mt-20 flex gap-5">
				<input
					className="w-80 rounded-lg px-2 h-10 text-lg bg-blue-200 outline-none border-2 border-blue-300 focus:border-blue-600"
					placeholder="Guess Letter/Word"
					onChange={changeWordInput}
					value={wordInput}
				/>
				<button
					onClick={onEnter}
					className="bg-green-400 w-32 rounded-xl text-white hover:bg-green-500 active:bg-green-700"
				>
					Enter
				</button>
			</div>
		</div>
	);
}

export default HangmanScreen;
