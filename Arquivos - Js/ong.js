const arrayOngs = [
	{
		id: 1,
		imgLogo: "amigo_animal.png",
		altImgLogo: "ONG Amigo Animal",
		nomeOng: "Amigo Animal",
		descricao: "A Associação Amigo Animal foi fundada em 2000. Hoje, mantêm um abrigo com mais de 1.000 cães, priorizando o cuidado e adoção responsável de animais.",
		cidade: "Curitiba - PR",
		endereco: "Rua Padre Francisco Chylaszek, 669 - Cidade Industrial de Curitiba",
		telefone: "(41) 99975-2711",
		email: "amigoanimal@amigoanimal.org.br",
		siteUrl: "https://amigoanimal.org.br/",
		site: "amigoanimal.org.br",
		instagramLink: "#",
		facebookLink: "#",
		whatsappLink: "#",
		twitterLink: "#",
	},
	{
		id: 2,
		imgLogo: "cao_sem_dono.png",
		altImgLogo: "ONG Cão sem dono",
		nomeOng: "Projeto Cão Sem Dono",
		descricao: "O Cão Sem Dono é uma ONG fundada em 2005, que resgata e cuida de animais de rua. Possuem dois abrigos em Itapecerica da Serra, SP, e contam com uma equipe dedicada de 26 membros.",
		cidade: "São Paulo - SP",
		endereco: "Rua Honório Serpa, 259, Jardim Vergueiro",
		telefone: "(00) 0000-0000",
		email: "clinica@caosemdono.com.br",
		siteUrl: "https://www.caosemdono.com.br/",
		site: "caosemdono.com.br",
		instagramLink: "#",
		facebookLink: "#",
		whatsappLink: "#",
		twitterLink: "#",
	},
	{
		id: 3,
		imgLogo: "vira_lata_vira_amigo.png",
		altImgLogo: "ONG Vira Lata Vira Amigo",
		nomeOng: "Vira Lata Vira Amigo",
		descricao: "A “Vira Lata Vira Amigo” é uma ONG criada oficialmente em setembro de 2016 que se dedica desde 2012 em atividades de proteção, ajuda, e procura de lares a cães da Grande São Paulo.",
		cidade: "Ibiúna - SP",
		endereco: "Estrada José PiresFilho, 40, Zona Rural",
		telefone: "(11) 99615-0749",
		email: "contato@viralataviraamigo.org.br",
		siteUrl: "https://viralataviraamigo.org.br/",
		site: "viralataviraamigo.org.br",
		instagramLink: "#",
		facebookLink: "#",
		whatsappLink: "#",
		twitterLink: "#",
	},
];

for (let i = 0; i < arrayOngs.length; i++) {
	// Cria o elemento
	const cardOngInfo = document.createElement("div");
	cardOngInfo.classList.add("cardOngInfo");

	// Popula o elemento
	cardOngInfo.innerHTML = `
		<div class="containerLogoOng">
			<img
				src="Assets/Images/ongsImages/${arrayOngs[i].imgLogo}"
				alt="Logo ${arrayOngs[i].altImgLogo}"
				class="logoOng" />
		</div>

		<div class="containerNomeOng">
			<h2 class="nomeOng">${arrayOngs[i].nomeOng}</h2>
		</div>

		<div class="containerDescricaoOng">
			<p class="descricaoOng">${arrayOngs[i].descricao}</p>
		</div>

		<div class="containerInformacoesOng">
			<p><strong>Cidade:</strong> ${arrayOngs[i].cidade}</p>
			<p><strong>Endereço:</strong> ${arrayOngs[i].endereco}</p>
			<p><strong>Telefone:</strong> ${arrayOngs[i].telefone}</p>
			<p><strong>Email:</strong> ${arrayOngs[i].email}</p>
			<p><strong>Site: </strong><a href="${arrayOngs[i].siteUrl}" target="_blank">${arrayOngs[i].site}</a></p>
		</div>

		<div class="containerRedesSociaisBotoes">
			<a href="${arrayOngs[i].instagramLink}" target="_blank"><img src="Assets/Images/ongsImages/instagram.png" alt="Botão para o Instagram"/></a>
			<a href="${arrayOngs[i].facebookLink}" target="_blank"><img src="Assets/Images/ongsImages/facebook.png" alt="Botão para o Facebook"/></a>
			<a href="${arrayOngs[i].whatsappLink}" target="_blank"><img src="Assets/Images/ongsImages/whatsapp.png" alt="Botão para o WhatsApp"/></a>
			<a href="${arrayOngs[i].twitterLink}" target="_blank"><img src="Assets/Images/ongsImages/twitter.png" alt="Botão para o Twitter"/></a>
		</div>
    `;

	// Insere o elemento no DOM
	const saida = document.getElementById("cardsOngsSection");
	saida.appendChild(cardOngInfo);
}

function popularSelectComCidades(arrayOngs) {
	const cidadesSet = new Set();

	arrayOngs.forEach((ong) => {
		cidadesSet.add(ong.cidade);
	});

	const cidadesArray = Array.from(cidadesSet);

	const selectCidades = document.getElementById("seletorDeCidade"); // Substitua 'seuSelectId' pelo ID do seu elemento select

	selectCidades.innerHTML = "";

	const optionTodas = document.createElement("option");
	optionTodas.value = "";
	optionTodas.textContent = "Exibir todas as ONGs";
	optionTodas.selected = true;
	selectCidades.appendChild(optionTodas);

	cidadesArray.forEach((cidade) => {
		const optionCidade = document.createElement("option");
		optionCidade.value = cidade;
		optionCidade.textContent = cidade;
		selectCidades.appendChild(optionCidade);
	});
}
popularSelectComCidades(arrayOngs);



const selectCidades = document.getElementById("seletorDeCidade");

selectCidades.addEventListener("change", () => {
	const cidadeSelecionada = selectCidades.value;

	const cardsOngsSection = document.getElementById("cardsOngsSection");
	cardsOngsSection.innerHTML = "";

	const ongsFiltradas = arrayOngs.filter(
		(ong) => ong.cidade === cidadeSelecionada || cidadeSelecionada === ""
	);

	console.log("ongsFiltradas", ongsFiltradas);

	ongsFiltradas.forEach((ong) => {
		const cardOngInfo = document.createElement("div");
		cardOngInfo.classList.add("cardOngInfo");

		cardOngInfo.innerHTML = `
		<div class="containerLogoOng">
			<img
				src="Assets/Images/ongsImages/${ong.imgLogo}"
				alt="Logo ${ong.altImgLogo}"
				class="logoOng" />
		</div>

		<div class="containerNomeOng">
			<h2 class="nomeOng">${ong.nomeOng}</h2>
		</div>

		<div class="containerDescricaoOng">
			<p class="descricaoOng">${ong.descricao}</p>
		</div>

		<div class="containerInformacoesOng">
			<p><strong>Cidade:</strong> ${ong.cidade}</p>
			<p><strong>Endereço:</strong> ${ong.endereco}</p>
			<p><strong>Telefone:</strong> ${ong.telefone}</p>
			<p><strong>Email:</strong> ${ong.email}</p>
			<p><strong>Site: </strong><a href="${ong.siteUrl}" target="_blank">${ong.site}</a></p>
		</div>

		<div class="containerRedesSociaisBotoes">
			<a href="${ong.instagramLink}" target="_blank"><img src="Assets/Images/ongsImages/instagram.png" alt="Botão para o Instagram"/></a>
			<a href="${ong.facebookLink}" target="_blank"><img src="Assets/Images/ongsImages/facebook.png" alt="Botão para o Facebook"/></a>
			<a href="${ong.whatsappLink}" target="_blank"><img src="Assets/Images/ongsImages/whatsapp.png" alt="Botão para o WhatsApp"/></a>
			<a href="${ong.twitterLink}" target="_blank"><img src="Assets/Images/ongsImages/twitter.png" alt="Botão para o Twitter"/></a>
		</div>
    `;
		cardsOngsSection.appendChild(cardOngInfo);
	});
});
