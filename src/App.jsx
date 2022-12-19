import { useState } from "react";
import StartScreen from "./components/StartScreen";

function App() {
	const [hasStarted, setHasStarted] = useState(false);

	return (
		<div className="absolute h-screen w-screen bg-blue-400">
			<div className="flex justify-center mt-96">
				{!hasStarted && <StartScreen setHasStarted={setHasStarted} />}
			</div>
		</div>
	);
}

export default App;
