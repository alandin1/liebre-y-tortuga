class Corredor {
    recorrido1 = 0
    run(pasos){
      this.recorrido1 += pasos
      return this.recorrido1
    }
    getSuerte(){
      return Math.floor(Math.random()*100)+1
    }
    cleanTravel(){
      this.recorrido1 = 0
    }
  }
  
  class Tortuga extends Corredor{
    reaction(){
      let suerte = this.getSuerte()
      let pasos = 0
      console.group("Turno de la tortuga")
      if(suerte <= 50){
        console.log("Paso rápido")
        pasos = 3
      }else if(suerte <=70) {
        console.log("Resbalón")
        pasos = -6
      }else {
        console.log("Paso lento")
        pasos = 1
      }
      console.log(`Y avanzó ${pasos} pasos`)
      console.groupEnd()
      return this.run(pasos)
    }
  }
  
  class Liebre extends Corredor{
    reaction(){
        let suerte = this.getSuerte()
        let pasos = 0
        console.group("Turno de la liebre")
        if(suerte <= 20) {
          console.log("Se quedó dormida")
          pasos = 0
        } else if(suerte <=40){
          console.log("Salto grande")
          pasos = 9
        } else if(suerte <=50){
          console.log("Resbalón grande")
          pasos = -12
        } else if(suerte <=80){
          console.log("Salto pequeño")
          pasos = 1
        } else{
          console.log("Resbalón pequeño")
          pasos = -2
        }
        console.log(`Y avanzó ${pasos} pasos`)
        console.groupEnd()

        return this.run(pasos)
      }
    }
    
    