import "../src/styles/settings/colors.css"
import "../src/styles/elements/global.css"

import HeaderPage from "../src/components/HeaderPage";
import MainPage from "../src/components/MainPage";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML ("beforeend", 
    `
        ${HeaderPage()}
        ${MainPage()}
    `
);



