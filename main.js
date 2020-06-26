var tOn = document.querySelector('#card');
var tOff = document.querySelector('#card2');

function change () {
    tOn.classList.toggle('show');
    tOff.classList.toggle('show');
    console.log('Changed');
};

document.getElementById('btn').onclick = () => change();
document.getElementById('btn2').onclick = () => change();

// document.getElementById('btn').onclick = () => {
//     tOn.classList.toggle('show');
//     tOff.classList.toggle('show');
// };
