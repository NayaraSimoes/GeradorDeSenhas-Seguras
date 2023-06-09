//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=/,.!@#$%&+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// O console serve para testa o código: console.log(getSymbol());
// sendo assim serve para vê se está funcionando.

//Eventos
generatePasswordButton.addEventListener("click", () => {
    console.log("teste");
});