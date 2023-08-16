const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//Acceder a todos los input
let inputs = $$('.input');
// for (let input of inputs) {
//     input.classList.add('is-focused')
// }

const cursos = ['Frontend', 'Backend', 'QA testing', 'UX/UI'];

//Crear option en el select con array
const cursosDisponibles = (listadoCursos) => {
    $('#select').innerHTML = ''
    for (let curso of listadoCursos) {
    let option = document.createElement('option');
    option.setAttribute('value', curso);
    option.innerHTML = `${curso}`;
    $('#select').appendChild(option)
    }
}
cursosDisponibles(cursos)

$('#addBtn').addEventListener('click', () => {
    $('.modal').classList.add('is-active');
})

$('.modal-close').addEventListener('click', () => {
    $('.modal').classList.remove('is-active');
})

//Eliminar curso
$('#deleteBtn').addEventListener('click', () => {
    let indice = cursos.indexOf($('#select').value);
    cursos.splice(indice, 1);
    cursosDisponibles(cursos)
})

//Para que el input fecha arranque con la fecha de hoy
const inicializar = () => {
    const inputsFecha = $$('input[type="date"]');
    inputsFecha.forEach((input) => {
        input.valueAsDate = new Date();
    })
}
inicializar();


//Para añadir a través de un input, que esta dentro de un modal, un elemento al select y al array
$('#addCourse').addEventListener('click', () => {
    const nuevoCurso = $('#courseName').value;
    cursos.push(nuevoCurso);
    cursosDisponibles(cursos);
    $('.modal').classList.remove('is-active');
    $('#courseName').value = '';
})
