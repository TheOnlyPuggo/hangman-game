import { useState, useEffect } from "react";

function HangmanScreen(props) {
	const [wordSplit, setWordSplit] = useState([]);
	const [hiddenWord, setHiddenWord] = useState("");

	useEffect(() => {
		setWordSplit([...props.word]);
		[...props.word].forEach((element) => {
			setHiddenWord((prev) => prev + "_");
		});
	}, []);

	return (
		<div>
			<p>{hiddenWord}</p>
		</div>
	);
}

export default HangmanScreen;
