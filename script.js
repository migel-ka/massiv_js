document.querySelector('#massivInput').onclick = massivFilter;

let massivStrong = [];

function massivFilter() {
    let inputValues = document.querySelector('#massivStrong').value;
    massivStrong = inputValues.replace(/\s/g, '').split(',').map(Number);
    document.querySelector('#massivOut').innerHTML = massivStrong.join(', ');
}

document.querySelectorAll('input[type=radio]').forEach(
    radio => {
        radio.addEventListener('change',function() {
            if (this.checked) {
                let masFilter = this.value;
                console.log(masFilter);
                let outMass;

                switch (masFilter) {
                    case "positive":
                        outMass = massivStrong.filter((item) => item >= 0);
                        if (outMass.length == 0) {
                            outMass = ['Значений нет'];
                        }
                        break;
                    case "negative":
                        outMass = massivStrong.filter((item) => item < 0);
                        if (outMass.length == 0) {
                            outMass = ['Значений нет'];
                        }
                        break;
                    case "even":
                        outMass = massivStrong.filter((item) => item%2 === 0);
                        if (outMass.length == 0) {
                            outMass = ['Значений нет'];
                        }
                        break;
                    case "odd":
                        outMass = massivStrong.filter((item) => item%2 !== 0);
                        if (outMass.length == 0) {
                            outMass = ['Значений нет'];
                        }
                        break;
                }
                document.querySelector('#f-result').innerHTML = outMass.join(', ');
            }
            
            
        })
    })

