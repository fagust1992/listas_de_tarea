var boton_agregar=  document.querySelector("#agregar")
var nuevo=  document.querySelector("#nuevo")
const array_tareas=[
  {id:0,nombre:"lavar los platos",statu:false,valor_statu:"no realizada"},
  {id:0 , nombre:"ver el auto",statu:false,valor_statu:"no realizada"},
  {id:0, nombre:"comer a las 4pm",statu:false,valor_statu:"no realizada"},
  {id:0 , nombre:"ir al gym",statu:false,valor_statu:"no realizada"},
  

]
i=603;
realizada=0
function mostrandoarryas() {
  const selecionando_ul= document.querySelector(".servicios")
  const total=document.querySelector(".total")

  console.log(total)
   let html="";
   let total1="";

for(index in array_tareas){
  i++
  realizada++
  array_tareas[index].id=i;
  html+=`
  
<li> <h4>${array_tareas[index].id} </h4> <h4>Tarea:${array_tareas[index].nombre}</h4> <h5> ${array_tareas[index].valor_statu} </h5>  <button class="" onclick="cambiarestado(${array_tareas[index].id})">cambiar estado</button> <button onclick="borrar(${array_tareas[index].id})">borrar</button></li>

  `
 
}

total1+=`

<li> total:${array_tareas.length}</li>

  `
total.innerHTML=total1
selecionando_ul.innerHTML=html

}

mostrandoarryas()

boton_agregar.addEventListener("click", () => {
  const selecionando_ul= document.querySelector(".servicios")
  console.log(selecionando_ul)


  var valor_input=nuevo.value
  var html=""

  array_tareas.unshift({
    id:1,nombre:valor_input,statu:false,valor_statu:"no realizada"
  })


  mostrandoarryas()
  console.log(array_tareas)
  });

  function borrar(idtarea) {

    var  indextarea=array_tareas.findIndex((valor)=> valor.id==idtarea)
    array_tareas.splice(indextarea,1)
    mostrandoarryas()

   }
   function cambiarestado(idtarea) {

    for(index in array_tareas){
 
      const variable=array_tareas[index];
      const indexservicio=array_tareas.findIndex((nose)=> nose.id==idtarea)
      if(idtarea== variable.id ){
        array_tareas.splice(indexservicio,1,{id:idtarea,nombre:array_tareas[index].nombre,statu:true,valor_statu:"realizada"})
        
      }
     
    }
 mostrandoarryas()

  }




