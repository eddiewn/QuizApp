export function createEndScreen(mainTag){

	// Räkna ut procenten av rätt o ge en rating berode på det. etc "S+!, A, B, C, D ,E ,F"
		const endScreenDiv = document.createElement("div")
		endScreenDiv.id = "endScreenDiv";
		
		const contentTest = document.createElement("h1");
		contentTest.textContent = "This is end page"

		endScreenDiv.appendChild(contentTest);
		mainTag.appendChild(endScreenDiv);

		//Printa ut frågan + vad spelaren svara
		// array.forEach(element => {
			
		// });


}