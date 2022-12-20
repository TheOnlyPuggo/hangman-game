import { useState, useEffect } from "react";

// pages
import StartScreen from "./pages/StartScreen";
import PlayerSizeScreen from "./pages/PlayerSizeScreen";
import CreateWordScreen from "./pages/CreateWordScreen";
import HangmanScreen from "./pages/HangmanScreen";
import GameOverScreen from "./pages/GameOverScreen";

function App() {
	// screenstates
	const [showStartScreen, setShowStartScreen] = useState(true);
	const [showPlayerSelectScreen, setShowPlayerSelectScreen] = useState(false);
	const [showCreateWordScreen, setShowCreateWordScreen] = useState(false);
	const [showHangmanScreen, setShowHangmanScreen] = useState(false);
	const [showGameOverScreen, setShowGameOverScreen] = useState(false);

	const [wordInfo, setWordInfo] = useState({});

	function onStartButton() {
		setShowStartScreen(false);
		setShowPlayerSelectScreen(true);
	}

	function onLocalMultiplayer() {
		setShowPlayerSelectScreen(false);
		setShowCreateWordScreen(true);
	}

	function onHangmanStartTwoPlayer() {
		setShowHangmanScreen(true);
		setShowCreateWordScreen(false);
	}

	function onGameOver() {
		console.log("ADASI");
		setShowHangmanScreen(false);
		setShowGameOverScreen(true);
	}

	function onNewGame() {
		setShowStartScreen(true);
		setShowGameOverScreen(false);
	}

	return (
		<div className="absolute h-screen w-screen bg-blue-400">
			<div className="flex justify-center mt-96">
				{/* homescreen */}
				{showStartScreen && <StartScreen onStartButton={onStartButton} />}

				{/* playerselectscreen */}
				{showPlayerSelectScreen && (
					<PlayerSizeScreen onLocalMultiplayer={onLocalMultiplayer} />
				)}

				{/* createwordscreen */}
				{showCreateWordScreen && (
					<CreateWordScreen
						setWordInfo={setWordInfo}
						onHangmanStartTwoPlayer={onHangmanStartTwoPlayer}
					/>
				)}
				{/* hangmanscreen */}
				{showHangmanScreen && (
					<HangmanScreen
						category={wordInfo.category}
						word={wordInfo.word}
						onGameOver={onGameOver}
					/>
				)}
				{/* gameoverscreen */}
				{showGameOverScreen && <GameOverScreen onNewGame={onNewGame} />}
			</div>
		</div>
	);
}

export default App;
