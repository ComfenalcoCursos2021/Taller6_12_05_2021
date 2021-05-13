// 2.	Calcular el sueldo que le corresponde al trabajador de una empresa que cobra $14.400.000 
// anual, el programa debe realizar los cálculos en función de los siguientes criterios:

// •	Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// •	Si lleva menos de 10 años, pero más que 5 se le aplica un aumento del 7%.
// •	Si lleva menos de 5 años, pero más que 3 se le aplica un aumento del 5%.
// •	Si lleva menos de 3 años se le aplica un aumento del 3%.

const anual = 14400000;
const aumento = {
    cantidad_anos: prompt('Ingrese la cantidada de años trabados'),
    porcentajes: [
        {
            tiempo: 10, 
            porcentaje: 0.10
        },
        {
            tiempo: 5, 
            porcentaje: 0.07
        },
        {
            tiempo: 3, 
            porcentaje: 0.05
        },
        {
            tiempo: null, 
            porcentaje: 0.03
        },
    ],
    moneda: function ({...arg}){
        return Intl.NumberFormat('ed-DE', {style: "currency", currency: "COP"}).format(arg.dinero);
    },
    porcentaje: function (){
        let anos = this.cantidad_anos;
        let i = 0;
        while(!(anos > this.porcentajes[i].tiempo)){
            i++;
        }
        this.salario = anual * anos;
        this.totalaumento = anual * this.porcentajes[i].porcentaje;
        return `
            En ${anos} años gano un total de ${this.moneda({dinero: this.salario})} 
            su aumento es de ${Math.fround((this.porcentajes[i].porcentaje*100))}% 
            total a ganar el proximo año +${this.moneda({dinero: this.totalaumento})}`;
    }
}
const datos = Object.create(aumento);
console.log(datos.porcentaje());