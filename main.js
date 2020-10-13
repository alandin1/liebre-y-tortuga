class Corredor {
    recorrido1 = 0
    run(pasos){
      this.recorrido1 += pasos
      return this.recorrido1
    }
    getLucky(){
      return Math.floor(Math.random()*100)+1
    }
    cleanTravel(){
      this.recorrido1 = 0
    }
  }
  