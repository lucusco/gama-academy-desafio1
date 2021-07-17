const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let nome = document.getElementById("nome").value;
	let email = document.getElementById("email").value;
	
	if (nome == '' || email == '') {
		let campoEmBranco = (nome == '') ? 'nome' : 'email';
		mensagemRetorno('warning', `Ops, o campo com seu ${campoEmBranco} está em branco`);
		return;
	}

	let dadosInseridos = {
		nome: nome,
		email: email
	};
	localStorage.setItem('dataForm' ,JSON.stringify(dadosInseridos));
	mensagemRetorno('success', "Show, cadastrado com sucesso!!!");

	document.getElementById("nome").value = '';
	document.getElementById("email").value = '';
});

function mensagemRetorno(tipo, msg) {
	Swal.fire({
		position: 'center',
		icon: tipo,
		title: '',
		text: msg,
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true
	} );
}
