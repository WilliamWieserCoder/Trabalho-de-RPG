let jogador = {
  nome: "",
  classe: "",
  hp: 10,
  forca: 0,
  def: 0,
  mag: 0,
  des: 0,
  inventario: [],
}


console.log("=====Bem vindo(a)=====\nVamos criar seu personagem.")


jogador.nome = prompt("Primeiro, qual seu nome?")


console.log("Agora, vamos escolher a sua classe.\n[1] Mago:\n[2] Arqueiro\n[3] Guerreiro\n[4] Bardo")


let esc = Number(prompt("Digite o número da classe escolhida:"))
switch(esc){
  case 1:
      jogador.classe = "Mago"
      jogador.hp = jogador.hp+10
      jogador.forca = jogador.forca+5
      jogador.def = jogador.def+7
      jogador.mag = jogador.mag+20
      jogador.des = jogador.des+3
      jogador.inventario = ["varinha", "chapéu de mago", "livro"]
      break
  case 2:
      jogador.classe = "Arqueiro"
      jogador.hp = jogador.hp+12
      jogador.forca = jogador.forca+8
      jogador.def = jogador.def+8
      jogador.mag = jogador.mag+5
      jogador.des = jogador.des+20
      jogador.inventario = ["arco", "aljava", "chapéu de arqueiro"]
      break
  case 3:
      jogador.classe = "Guerreiro"
      jogador.hp = jogador.hp+20
      jogador.forca = jogador.forca+15
      jogador.def = jogador.def+10
      jogador.mag = jogador.mag+0
      jogador.des = jogador.des+2
      jogador.inventario = ["espada", "escudo", "chapéu de guerreiro"]
      break
  case 4:
      jogador.classe = "Bardo"
      jogador.hp = jogador.hp+15
      jogador.forca = jogador.forca+5
      jogador.def = jogador.def+10
      jogador.mag = jogador.mag+16
      jogador.des = jogador.des+8
      jogador.inventario = ["flauta", "gaita", "chapéu de bardo", "alaude", "triângulo", "ratos"]
      break
  default:
      console.log("Indigente")
      jogador.classe =
      jogador.hp =
      jogador.forca =
      jogador.def =
      jogador.mag =
      jogador.inventario = []
}
function Mostrarinfo() {
console.log(`Personagem: ${jogador.nome}
Classe: ${jogador.classe}


Atributos
HP:${jogador.hp}
Força:${jogador.forca}
Defesa:${jogador.def}
Magia:${jogador.mag}
Destreza:${jogador.des} `)
}

function jogadorEstaVivo() {
  return jogador.hp > 0;
}

// Loop principal do jogo
while (jogadorEstaVivo()) {
  console.log("Escolha uma ação:");
  console.log("[1] Atacar");
  console.log("[2] Usar item do inventário");
  console.log("[3] Fugir");
  console.log("[4] Atributos");

  // Solicita a escolha do jogador
  let escolhaAcao = prompt("Digite o número da ação escolhida:");

  // Executa a ação escolhida pelo jogador
  switch (escolhaAcao) {
      case "1":
          console.log("Você atacou o inimigo!");
          break;
      case "2":
          console.log("Você usou um item do inventário!");
          break;
      case "3":
          console.log("Você fugiu da batalha!");
          break;
      case "4":
        Mostrarinfo()
        break
      default:
          console.log("Opção inválida. Escolha novamente.");
  }

}

