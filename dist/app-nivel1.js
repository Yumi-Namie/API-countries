"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const banderas = document.getElementById('banderas');
document.addEventListener("DOMContentLoaded", function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        const CountriesData = yield fetchData(); // Chamo fetchData e Armazeno os dados retornados pela função fetchData em CoutriesData
        banderillas(CountriesData); // Chamei a função banderillas com os dados retornados para imprimir na webpage
    });
});
// Função fetchDATA:
//Transformo a resposta de fetch em json
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://restcountries.com/v3.1/all');
    const countriesData = yield response.json();
    return countriesData;
});
// Função banderillas:
// Uso as informações armazenadas em CoutriesData e a cada uma "imprimo" em <banderas> que está em Html
// o codigo que eu tinha em html, copio e colo aqui para  substituir esta parte do codigo do html - codigo nao estático
const banderillas = (CountriesData) => {
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
};
