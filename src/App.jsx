import { useState } from "react";

// components
import StartScreen from "./components/StartScreen";
import PlayerSizeScreen from "./components/PlayerSizeScreen";

function App() {
	const [showStartScreen, setShowStartScreen] = useState(true);
	const [showPlayerSelectScreen, setShowPlayerSelectScreen] = useState(false);

	// homescreen
	function onStartButton() {
		setShowStartScreen(false);
		setShowPlayerSelectScreen(true);
	}

	return (
		<div className="absolute h-screen w-screen bg-blue-400">
			<div className="flex justify-center mt-96">
				{/* homescreen */}
				{showStartScreen && <StartScreen onStartButton={onStartButton} />}

				{/* playerselectscreen */}
				{showPlayerSelectScreen && <PlayerSizeScreen />}
			</div>
		</div>
	);
}

export default App;
