function secondLargestNumber(numbers){
  let first=numbers[0]
//en numbers los "[]" indican que se refieren al indice, en este caso "0"
  let second=0;
  for (let i=0;i<numbers.length;i++){
//for es un Loop (bucle)
//i es el indice de "numbers"
//length es un metodo de array
    if (numbers[i]>first){
      second= first;
      first=numbers[i]
    }
    if (numbers[i]>second && numbers[i]<first){
//"&&" es un operador logico y valida si las dos condiciones son verdad, en este caso "numbers[i]<second y numbers[i]<first"
      second=numbers[i];
    }
  }
  return second
//una vez acabado el ciclo for el valor de "second" se guarda y se termina el codigo. 
}
let nums=[8,4,6,10,9,11]
console.log(secondLargestNumber(nums))
//al ejecutarse console.log se imprimira solamente el valor de "second" ya que es el unico valor guardado. 