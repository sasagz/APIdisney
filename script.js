// Exemplo de "banco de dados" de personagens
const characters = [
    {
        name: "Mickey Mouse",
        movie: "Vários",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"
    },
    {
        name: "Elsa",
        movie: "Frozen",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Elsa_EFP.png/220px-Elsa_EFP.png"
    },
    {
        name: "Simba",
        movie: "O Rei Leão",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/Simba_disney.png"
    }
];

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("resultContainer");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    resultContainer.innerHTML = "";

    const found = characters.filter(c => c.name.toLowerCase().includes(query));

    if (found.length === 0) {
        resultContainer.innerHTML = "<p>Personagem não encontrado.</p>";
    } else {
        found.forEach(c => {
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = c.imageUrl;

            const name = document.createElement("p");
            name.textContent = "Nome: " + c.name;

            const movie = document.createElement("p");
            movie.textContent = "Filme: " + c.movie;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(movie);

            resultContainer.appendChild(card);
        });
    }
});
