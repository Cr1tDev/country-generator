"use strict";

const countryContaienr = document.querySelector(".countries");
const inputContainer = document.querySelector(".country__input");
const btnGenerate = document.querySelector(".btn-country");

const renderCountry = function (country) {
  const data = country;
  console.log(data);

  const html = `
        <article class="country">
          <div class="img-contianer">
            <img src="${
              data.flags.png
            }" alt="country flag" class="country__img" />
          </div>
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${Number(
              data.population / 10000000
            )}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.fill}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.PHP.name
            }</p>
          </div>
        </article>
  `;
  countryContaienr.insertAdjacentHTML("beforeend", html);
  countryContaienr.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response) return;
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    });
};

btnGenerate.addEventListener("click", () => {
  const countryName = inputContainer.value;

  if (!countryName) return;

  getCountryData(countryName);
});
