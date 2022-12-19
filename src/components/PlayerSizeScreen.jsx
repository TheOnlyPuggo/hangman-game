function PlayerSizeScreen() {
	return (
		<div className="flex flex-col items-center gap-8">
			<p className="text-white font-bold text-3xl border-b pb-5">
				Singleplayer or Local Multiplayer
			</p>
			<div flex flex-row>
				<button className="bg-green-400 p-2 text-white rounded-xl w-40 h-16 hover:bg-green-500 active:bg-green-700 mr-5">
					Singleplayer
				</button>
				<button className="bg-blue-500 p-2 text-white rounded-xl w-40 h-16 hover:bg-blue-600 active:bg-blue-800">
					Local Multiplayer
				</button>
			</div>
		</div>
	);
}

export default PlayerSizeScreen;
