function StartScreen(props) {
	return (
		<div className="flex flex-col gap-5">
			<p className="text-white font-bold text-6xl stroke-red-500">HangMan</p>
			<button
				onClick={props.onStartButton}
				className="bg-blue-500 rounded-lg text-white h-10 hover:bg-blue-600 active:bg-blue-800"
			>
				Start
			</button>
			<button className="bg-gray-500 rounded-lg text-white h-10 hover:bg-gray-600 active:bg-gray-800">
				Rules
			</button>
		</div>
	);
}

export default StartScreen;
