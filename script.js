// Elementos para la función de copiar
const buttonCopy = document.querySelector('.copy');
const textToCopy = document.querySelector('.contain-info div');

// Función de copiado
buttonCopy.addEventListener('click', () =>{
    const selection = document.createRange();
    selection.selectNodeContents(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selection);
    const res = document.execCommand('copy');
    window.getSelection().removeRange(selection);

    showAlert();
})


const showAlert = () =>{
    const alert = document.querySelector('.alert');
    alert.classList.remove('invisible');
    setTimeout(()=>{
        alert.classList.add('invisible')
    },1500);
}