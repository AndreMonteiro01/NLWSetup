const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
  //Primeiro click 01/01 dia não existe.
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)//variável para verificar se o dia já existe. E formato de data.

  const dayExists = nlwSetup.dayExists(today) //Verifica se o dia nlwSetup existe.

//Se existir o dia mostrar uma msg para o usário e não add nada e o cód não entra no if, 
//mas se não existir o dia add o registro. 
  if(dayExists){
    alert("Dia já registrado 🛑")
  }

  //Add o dia.
  alert('Dia adicionado com sucesso ✔')
  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))//Salavando as alterações e Json passando em formato de String.
}
// const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}//Pegando as informações do localStorage, transformando em objeto e guardando no const data.
//  nlwSetup.setData(data)// Se existir um objeto o data está esperando
//  nlwSetup.load()// Carrega as informações.