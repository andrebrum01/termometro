const form = document.getElementById('myform');
const finalTemp = document.getElementById('tempFinal');
const userTemp = document.getElementById('opTemp');

function insertResult(t, r) {
    const result = document.getElementById("result");
    var element = `A temperatura ${t}°${userTemp.value.toUpperCase()} em °${finalTemp.value.toUpperCase()} é: ${r}°${finalTemp.value.toUpperCase()}`
    result.innerHTML = `<h3> ${element} </h3>`;
}

form.addEventListener('submit', (e) => {
    const inputTemp = document.getElementById('valTemp');
    temp = parseFloat(inputTemp.value);
    var result;
    switch (userTemp.value) {
        case 'c':
            if (finalTemp.value === 'k') {
                result = temp + 273;
            } else if (finalTemp.value === 'f') {
                result = (1.8 * temp) + 32;
            }
            break;
        case 'k':
            if (finalTemp.value === 'c') {
                result = temp - 273;
            } else if (finalTemp.value === 'f') {
                result = (temp - 273) * 1.8 + 32;
            }
            break;
        case 'f':
            if (finalTemp.value === 'c') {
                result = (temp - 32) / 1.8;
            } else if (finalTemp.value === 'k') {
                result = (temp - 32) * (5 / 9) + 273.15;
            }
            break;

    }
    insertResult(temp, result.toFixed(1));
    e.preventDefault();

})

