import { useState } from "react";

// pages
import StartScreen from "./pages/StartScreen";
import PlayerSizeScreen from "./pages/PlayerSizeScreen";
import CreateWordScreen from "./pages/CreateWordScreen";

function App() {
	const [showStartScreen, setShowStartScreen] = useState(true);
	const [showPlayerSelectScreen, setShowPlayerSelectScreen] = useState(false);
	const [showCreateWordScreen, setShowCreateWordScreen] = useState(false);

	// homescreen
	function onStartButton() {
		setShowStartScreen(false);
		setShowPlayerSelectScreen(true);
	}

	// playerselectscreen
	function onLocalMultiplayer() {
		setShowPlayerSelectScreen(false);
		setShowCreateWordScreen(true);
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
				{showCreateWordScreen && <CreateWordScreen />}
			</div>
		</div>
	);
}

export default App;
