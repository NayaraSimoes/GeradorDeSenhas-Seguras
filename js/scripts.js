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

const generatePassword = (
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
) => {
    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]
    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = 
            generators[Math.floor(Math.random * generators.length)]();

            console.log(randomValue);
        });
    }
};


//Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});

// O console serve para testa o código: console.log(getSymbol());
// sendo assim serve para vê se está funcionando.