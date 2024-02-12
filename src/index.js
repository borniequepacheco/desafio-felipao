const prompt = require("prompt-sync")({ sigint: true });
let nome_heroi = prompt('Digite o nome do Herói: ');
let cond;

do {
    const prompt2 = require("prompt-sync")({ sigint: true });
    let xp = prompt2('Digite o XP do Herói: ');

    if (xp < 1000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Ferro");
    }
    else if (xp > 1000 && xp <= 2000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Bronze");
    }
    else if (xp > 2000 && xp <= 5000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Prata");
    }
    else if (xp > 5000 && xp <= 7000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Ouro");
    }
    else if (xp > 7000 && xp <= 8000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Platina");
    }
    else if (xp > 8000 && xp <= 9000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Ascendente");
    }
    else if (xp > 9000 && xp <= 10000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Imortal");
    }
    else if (xp > 10000) {
        console.log("O Herói de nome " + nome_heroi + " está no nível de Radiante");
    }

    const prompt3 = require("prompt-sync")({ sigint: true });
    cond = prompt3("Digite Sim, para alterar o XP do Herói: ").toLowerCase();

} while (cond == "sim")

