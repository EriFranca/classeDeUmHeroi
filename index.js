// Definição da classe Heroi
class Heroi {
    // Construtor que recebe nome, idade e tipo do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar um ataque
    atacar() {
      let ataque = "";
      
      // Determina o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque desconhecido";
          break;
      }
  
      // Exibe a mensagem do ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis
  const mago = new Heroi("Gandalf", 100, "mago");
  const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
  const monge = new Heroi("Bruce Lee", 40, "monge");
  const ninja = new Heroi("Hanzo", 30, "ninja");
  
  // Realizando ataques
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  