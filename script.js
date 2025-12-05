const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("resultContainer");

searchButton.addEventListener("click", async () => {
    const query = searchInput.value.trim();
    resultContainer.innerHTML = "";

    if (query === "") {
        resultContainer.innerHTML = "<p>Digite um nome!</p>";
        return;
    }

    // USANDO PROXY POR CAUSA DO CORS
    const url = `https://cors-anywhere.herokuapp.com/https://api.disneyapi.dev/character?name=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const json = await response.json();

        if (!json.data || json.data.length === 0) {
            resultContainer.innerHTML = "<p>Personagem não encontrado.</p>";
            return;
        }

        const character = json.data[0];

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}">
            <h2>${character.name}</h2>
            <h3>Filmes:</h3>
            <ul>
                ${
                    character.films.length > 0 
                    ? character.films.map(f => `<li>${f}</li>`).join("")
                    : "<li>Sem filmes encontrados.</li>"
                }
            </ul>
        `;

        resultContainer.appendChild(card);

    } catch (error) {
        resultContainer.innerHTML = "<p>Erro ao buscar personagem.</p>";
        console.error(error);
    }
});
