class hero {
  constructor(nameHero, ageHero, typeHero) {
    this.nameHero = nameHero
    this.ageHero = ageHero
    this.typeHero = typeHero
  }

  atacar() {
    let ataque = " ";
    switch (this.typeHero) {
      case 'mago':
        ataque = "usou magia"
        break
      case 'guerreiro':
        ataque = "usou a espada"
        break
      case 'monge':
        ataque = "usou artes marciais"
        break
      case 'ninja':
        ataque = "usou shuriken"
        break
      default:
        ataque = "não atacou"
        break
    }
    console.log(`O Heroi ${this.nameHero}, tem ${this.ageHero} anos, e é do tipo ${this.typeHero} e atacou usando ${ataque}`)
  }
}

let hero1 = new hero("Marcelo", 28, "mago")
hero1.atacar()

let hero2 = new hero("Lucian", 30, "guerreiro")
hero2.atacar()
