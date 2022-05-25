let arr = []
//creazione del prototipo classe persona
function Persona(nome,cognome,citta){
    
    this.nome = nome
    this.cognome = cognome
    this.citta = citta
    
}
// associa bottone
/* let btn = document.querySelector('#submit'); */



function inp(input){ 
    let list = []
    for (const iterator of input) {
        console.log(iterator.value)
        list.push(iterator.value)
    
        
    }  
    return list  
    
    
} 
function transport(nome, cognome, citta) {
    let obj = new Persona( nome,cognome,citta)
    
    return obj
    
}
function app(inp) {
    arr.push(inp)


}
function mostra(arr2) {
    let arr1 = document.querySelector('#lista')
     for (let index = 0; index < arr2.lenght; index++) {
      
      arr1.innerHTML = arr2[index].nome + ' ' + arr2[index].cognome + ' ' + arr2[index].citta;

         
     }

     
}





 




function daje() {
    console.log('daje')
    let mmm = inp(document.querySelectorAll('.address'))  ;
    app(transport(mmm[0],mmm[1],mmm[2]))
    mostra(arr)
     
    
    
   
    
}

document.querySelector('#submit').onclick = () => daje();






