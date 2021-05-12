// 4.El programa muestra primero una tabla de notas con sus
// equivalentes en el Standard Grading System o el sistema 
// utilizado en los Estados Unidos que va desde la A hasta la 
// F. El programa preguntará al usuario su nota y transformará 
// ese resultado al equivalente en el Standard Grading System. 
// También el programa dará una pequeña pero valiosa recomendación 
// al usuario respecto a su nivel de estudio y calidad como estudiante. 


const data = {
    Traditional: {
        0: [90, 100],
        1: [80, 89],
        2: [70, 79],
        3: [60, 69],
        4: [59, 1],
        5: [0, 0],
    },        
    Point_Range: {
        0: [12, 14],
        1: [9, 11],
        2: [6, 8],
        3: [3, 5],
        4: [1, 2],
        5: [0, 0],
    },
    Letter: {
        0: ['A'],
        1: ['B'],
        2: ['C'],
        3: ['D'],
        4: ['E'],
        5: ['F'],
    },
    SBG_Rating: {
        0: [4],
        1: [3],
        2: [2],
        3: [1],
        4: [0],
        5: [0],
    },
    Proficiency_level_witch_standard: {
        0: ['Exceeds proficiency'],
        1: ['Demonstrates proficiency'],
        2: ['Approaches proficiency'],
        3: ['Falls well below proficiency'],
        4: ['Lacks all proficiency'],
        5: ['No attempt made'],
    },
}

console.log(data);