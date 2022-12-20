function GameOverScreen(props) {
	return (
		<div className="flex flex-col items-center">
			<p className="text-white text-6xl font-bold">Game Over</p>
			<button
				onClick={props.onNewGame}
				className="text-white text-lg bg-green-400 rounded-lg p-2 mt-5 hover:bg-green-500 active:bg-green-700"
			>
				New Game
			</button>
		</div>
	);
}

export default GameOverScreen;
