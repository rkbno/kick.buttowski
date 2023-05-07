function tudo(){

	const botaoTrailer = document.querySelector(".botao-trailer");
	const botaoFecharModal = document.querySelector(".fechar-modal");
	const video = document.getElementById("video");
	const modal = document.querySelector(".modal");

	botaoTrailer.addEventListener("click", () => {
		modal.classList.toggle("aberto");
		video.setAttribute("src", video.src);
	});

	botaoFecharModal.addEventListener("click", () => {
		modal.classList.toggle("aberto");
		video.setAttribute("src", "");
	});
}



tudo();