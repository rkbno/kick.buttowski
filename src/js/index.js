function tudo(){

	const botaoTrailer = document.querySelector(".botao-trailer"),botaoFecharModal = document.querySelector(".fechar-modal"), video = document.getElementById("video"), modal = document.querySelector(".modal"), linkDoVideo = video.src  ;

	function alternarModal(){
		modal.classList.toggle("aberto");
	}

	botaoTrailer.addEventListener("click", () => {
		alternarModal();
		video.setAttribute("src", linkDoVideo);
	});

	botaoFecharModal.addEventListener("click", () => {
		alternarModal();
		video.setAttribute("src", "");
	});
}
tudo();