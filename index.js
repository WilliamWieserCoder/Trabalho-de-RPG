
let jogador = {
    nome: "",
    classe: "",
    hp: 10,
    forca: 0,
    def: 0,
    mag: 0,
    des: 0,
    inventario: [],
    xp: 0, // Experiência do jogador
    nivel: 1, // Nível do jogador
    monstrosDerrotados: 0 // Contador de monstros derrotados
};

// Função para gerar um número aleatório entre min e max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array de monstros
const monstros = [
    { nome: "Ogro", hp: 20, forca: 8, xp: 50 },
    { nome: "Esqueleto", hp: 15, forca: 5, xp: 30 },
    { nome: "Goblin", hp: 12, forca: 4, xp: 20 },
    { nome: "Dragão", hp: 30, forca: 10, xp: 100 },
    { nome: "Hidra", hp: 25, forca: 9, xp: 80 },
    { nome: "Troll", hp: 18, forca: 7, xp: 60 },
    { nome: "Morcego Gigante", hp: 10, forca: 3, xp: 15 },
    { nome: "Lobo", hp: 13, forca: 6, xp: 25 }
];

// Função para escolher um monstro aleatório do array
function escolherMonstroAleatorio() {
    const indice = getRandomInt(0, monstros.length - 1);
    return monstros[indice];
}

// Função para ganhar XP e verificar se o jogador subiu de nível
function ganharXP(xpGanho) {
    jogador.xp += xpGanho;
    console.log(`Você ganhou ${xpGanho} de XP! XP acumulada: ${jogador.xp}`);
    while (jogador.xp >= jogador.nivel * 100) {
        jogador.nivel++;
        jogador.hp += 8; // Aumenta os pontos de vida ao subir de nível
        console.log(`Parabéns! Você subiu para o nível ${jogador.nivel} e ganhou 8 pontos de vida.`);
    }
}

// Função para mostrar informações do personagem
function Mostrarinfo() {
    console.log(`Personagem: ${jogador.nome}
    Classe: ${jogador.classe}
  
    Atributos
    HP: ${jogador.hp}
    Força: ${jogador.forca}
    Defesa: ${jogador.def}
    Magia: ${jogador.mag}
    Destreza: ${jogador.des}
    XP: ${jogador.xp}
    Nível: ${jogador.nivel}`);
}

// Função para verificar se o jogador está vivo
function jogadorEstaVivo() {
    return jogador.hp > 0;
}

// Função para simular uma batalha
function batalhar(monstro) {
    console.log(`Um ${monstro.nome} apareceu!`);

    while (jogadorEstaVivo() && monstro.hp > 0) {
        console.log(`Seu HP: ${jogador.hp} | HP do ${monstro.nome}: ${monstro.hp}`);
        const escolhaAcao = prompt("Digite o número da ação escolhida: [1] Atacar | [2] Fugir");

        switch (escolhaAcao) {
            case "1":
                console.log("Você atacou o monstro!");
                const danoJogador = getRandomInt(0, jogador.forca);
                const danoMonstro = getRandomInt(0, monstro.forca);
                monstro.hp -= danoJogador;
                jogador.hp -= danoMonstro;
                console.log(`Você causou ${danoJogador} de dano ao ${monstro.nome} e recebeu ${danoMonstro} de dano.`);
                break;
            case "2":
                console.log("Você fugiu da batalha!");
                return; // Encerra a função se o jogador fugir
            default:
                console.log("Opção inválida. Escolha novamente.");
        }
    }

    if (jogador.hp <= 0) {
        console.log("Você foi derrotado!");
    } else {
        console.log(`Você derrotou o ${monstro.nome}!`);
        jogador.monstrosDerrotados++; // Incrementa o contador de monstros derrotados
        ganharXP(monstro.xp); // Ganha XP ao derrotar o monstro
        recuperarVida(); // Recupera um pouco de vida após a batalha

        // Verificar se o jogador derrotou 7 monstros e iniciar a batalha contra o chefe final
        if (jogador.monstrosDerrotados === 7) {
            const boss = { nome: "Malenia", hp: 50, forca: 20, xp: 200 };
            console.log(`Você enfrentará o chefe final, ${boss.nome}!`);
            batalhar(boss);
            return; // Encerrar a função após a batalha contra o chefe final
        }
    }
}

// Função para recuperar um pouco de vida após a batalha
function recuperarVida() {
    const vidaRecuperada = getRandomInt(4, 8); 
    jogador.hp += vidaRecuperada;
    console.log(`Você recuperou ${vidaRecuperada} pontos de vida após a batalha.`);
}

// Função para mostrar os itens do inventário que pertencem à classe do jogador
function mostrarItensClasse() {
    console.log("Itens do inventário que pertencem à sua classe:");
    jogador.inventario.forEach(item => {
        // Verifica se o item pertence à classe do jogador
        if (jogador.classe === "Mago" && ["varinha", "chapéu de mago", "livro"].includes(item)) {
            console.log("- " + item);
        } else if (jogador.classe === "Arqueiro" && ["arco", "aljava", "chapéu de arqueiro"].includes(item)) {
            console.log("- " + item);
        } else if (jogador.classe === "Guerreiro" && ["espada", "escudo", "chapéu de guerreiro"].includes(item)) {
            console.log("- " + item);
        } else if (jogador.classe === "Bardo" && ["flauta", "gaita", "chapéu de bardo", "alaude", "triângulo", "ratos"].includes(item)) {
            console.log("- " + item);
        }
    });
}

// Início do jogo
console.log("=====Bem vindo(a)=====\nVamos criar seu personagem.");

jogador.nome = prompt("Primeiro, qual seu nome?");

console.log("Agora, vamos escolher a sua classe.\n[1] Mago\n[2] Arqueiro\n[3] Guerreiro\n[4] Bardo");

let escolhaClasse = Number(prompt("Digite o número da classe escolhida:"));
switch (escolhaClasse) {
    case 1:
        jogador.classe = "Mago";
        jogador.hp += 10;
        jogador.forca += 5;
        jogador.def += 7;
        jogador.mag += 20;
        jogador.des += 3;
        jogador.inventario = ["varinha", "chapéu de mago", "livro"];
        break;
    case 2:
        jogador.classe = "Arqueiro";
        jogador.hp += 12;
        jogador.forca += 8;
        jogador.def += 8;
        jogador.mag += 5;
        jogador.des += 20;
        jogador.inventario = ["arco", "aljava", "chapéu de arqueiro"];
        break;
    case 3:
        jogador.classe = "Guerreiro";
        jogador.hp += 20;
        jogador.forca += 15;
        jogador.def += 10;
        jogador.mag += 0;
        jogador.des += 2;
        jogador.inventario = ["espada", "escudo", "chapéu de guerreiro"];
        break;
    case 4:
        jogador.classe = "Bardo";
        jogador.hp += 15;
        jogador.forca += 5;
        jogador.def += 10;
        jogador.mag += 16;
        jogador.des += 8;
        jogador.inventario = ["flauta", "gaita", "chapéu de bardo", "alaude", "triângulo", "ratos"];
        break;
    default:
        console.log("Indigente");
        jogador.classe = "";
        jogador.hp = 0;
        jogador.forca = 0;
        jogador.def = 0;
        jogador.mag = 0;
        jogador.des = 0;
        jogador.inventario = [];
}

// Loop principal do jogo
while (jogadorEstaVivo()) {
    console.log("Escolha uma ação:");
    console.log("[1] Batalhar");
    console.log("[2] Usar item do inventário");
    console.log("[3] Ver atributos");
    console.log("[4] Sair do jogo");

    const escolhaAcao = prompt("Digite o número da ação escolhida:");

    switch (escolhaAcao) {
        case "1":
            const monstro = escolherMonstroAleatorio();
            batalhar(monstro);
            break;
        case "2":
            mostrarItensClasse(); // Mostra apenas os itens da classe do jogador
            break;
        case "3":
            Mostrarinfo();
            break;
        case "4":
            console.log("Obrigado por jogar!");
            break;
        default:
            console.log("Opção inválida. Escolha novamente.");
    }
}
