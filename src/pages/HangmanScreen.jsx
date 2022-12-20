import { useState, useEffect } from "react";

function HangmanScreen(props) {
	const [wordSplit, setWordSplit] = useState([]);
	const [hiddenWord, setHiddenWord] = useState("");
	const [wordInput, setWordInput] = useState("");
	const [lives, setLives] = useState(null);
	const [incorrectLetters, setIncorrectLetters] = useState([]);

	useEffect(() => {
		setHiddenWord("");
		setWordSplit([...props.word]);
		[...props.word].forEach((element) => {
			if (element !== " ") {
				setHiddenWord((prev) => prev + "_");
			} else {
				setHiddenWord((prev) => prev + " ");
			}
		});
		setLives(Math.round(props.word.length * 1.1));
	}, []);

	const changeWordInput = (event) => {
		let textInput = event.target.value;
		let textInputLower = textInput.toLowerCase();
		setWordInput(textInputLower);
	};

	const onEnter = () => {
		let tempHiddenWord = hiddenWord;
		let tempHiddenWordSplit = [...tempHiddenWord];
		let letterCorrect = false;
		let alreadyUsed = false;
		let checkWord = "";

		if (wordInput.length !== 0) {
			if (wordInput.length === 1) {
				incorrectLetters.forEach((letter) => {
					if (letter === wordInput) {
						alreadyUsed = true;
					}
				});
				wordSplit.forEach((value, index) => {
					if (value === wordInput && !alreadyUsed) {
						tempHiddenWordSplit[index] = wordInput;
						setHiddenWord(tempHiddenWordSplit.join(""));
						checkWord = tempHiddenWordSplit.join("");
						letterCorrect = true;
					}
				});

				if (!letterCorrect && !alreadyUsed) {
					if (lives === 1) {
						props.onGameOver();
					}

					setLives((prev) => prev - 1);
					setIncorrectLetters((prev) => [...prev, wordInput].sort());
				}
			} else {
				if (wordInput === props.word) {
					props.onWin();
				} else {
					setLives((prev) => prev - 1);
				}
			}

			if (props.word === checkWord) {
				props.onWin();
			}
		}

		if (!alreadyUsed) {
			setWordInput("");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="flex flex-col mt-[-50px] items-center">
			<p className="text-white text-2xl">Lives left: {lives}</p>
			<p className="text-white text-4xl">Category: {props.category}</p>
			<p className="text-white text-6xl text-center tracking-widest">
				{hiddenWord}
			</p>

			<form className="mt-20 flex gap-5" onSubmit={handleSubmit}>
				<input
					className="w-80 rounded-lg px-2 h-10 text-lg bg-blue-200 outline-none border-2 border-blue-300 focus:border-blue-600"
					placeholder="Guess Letter/Word"
					onChange={changeWordInput}
					value={wordInput}
				/>
				<button
					type="submit"
					onClick={onEnter}
					className="bg-green-400 w-32 rounded-xl text-white hover:bg-green-500 active:bg-green-700"
				>
					Enter
				</button>
			</form>
			<p className="text-white text-5xl mt-10">Incorrect Letters:</p>
			<p className="text-white text-4xl mt-5">{incorrectLetters.toString()}</p>
		</div>
	);
}

export default HangmanScreen;
