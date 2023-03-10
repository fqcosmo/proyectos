let button = document.getElementById('btnMostrar');

button.addEventListener('click', () =>{
    console.log('Boton Funcional')
});


/*Buscador de Productos en tiempos reales*/
document.addEventListener('keyup', e=>{
    if(e.target.matches('#textBuscador')){
        if(e.key === 'Escape')e.target.value = ''
        document.querySelectorAll('.articulo').forEach(elementos =>{
            elementos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?elementos.classList.remove('filtro')
            :elementos.classList.add('filtro')
        })
    }
});