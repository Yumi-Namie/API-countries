const banderas = document.getElementById('banderas') as HTMLElement | null;

document.addEventListener("DOMContentLoaded", async function(event) { // Adicionei 'async' à função anônima
    const CountriesData = await fetchData(); // Chamo fetchData e Armazeno os dados retornados pela função fetchData em CoutriesData
    banderillas(CountriesData); // Chamei a função banderillas com os dados retornados para imprimir na webpage
});

// Função fetchDATA:
//Transformo a resposta de fetch em json
const fetchData = async (): Promise<CountryData[]> => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countriesData = await response.json();
    return countriesData;
}

interface CountryData {
    flags: { png: string };
    name: { common: string };
    population: string;
    region: string;
    capital: string;
}

// Função banderillas:
// Uso as informações armazenadas em CoutriesData e a cada uma "imprimo" em <banderas> que está em Html
// o codigo que eu tinha em html, copio e colo aqui para  substituir esta parte do codigo do html - codigo nao estático
const banderillas = (CountriesData: CountryData[]) => {
    if (banderas) {
        let elementos = '';
        CountriesData.forEach(item => {
            elementos += `
            <article class="card">
                <img src="${item.flags.png}" alt="Bandera ${item.name.common}" class="img-fluid">
                    <div class="card-content">
                        <h3>${item.name.common}</h3>
                        <p>
                            <b>Population: </b>
                            ${item.population}
                        </p>
                        <p>
                            <b>Region: </b>
                            ${item.region}
                        </p>
                        <p>
                            <b>Capital: </b>
                            ${item.capital}
                        </p>
                    </div>
                </article>
            `;
        });
        banderas.innerHTML = elementos;
    }
}
