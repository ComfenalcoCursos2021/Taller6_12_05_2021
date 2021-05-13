// 3.Programa para solicitar el nombre, y la nota promedio de 
// 5 estudiantes de un curso de computación.

const curso = {
    lista:  new Array(5).fill(null),
    validar: function (){
        for(let data in this.lista){
            if(this.lista[data].promedio >=3) this.lista[data].mensaje = "Aprobo el curso de computación";
            else this.lista[data].mensaje = "Reprobo el curso de computación";
        }
    }
}
const data = Object.create(curso);
for(let i in data.lista){
    data.lista[i] = {
        nombre: prompt(`Ingrese el nombre del estudiante #${parseInt(i)+1}`),
        promedio: prompt(`Ingrese el promedio del estudiante #${parseInt(i)+1}`),
    };
}
data.validar();
console.log(data.lista);