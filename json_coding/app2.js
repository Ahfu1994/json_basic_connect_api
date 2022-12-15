const selVal = document.querySelector('select');
const btn = document.querySelector('button');
const output = document.querySelector('.output');
const url = "https://swapi.dev/api/";

btn.addEventListener('click', () => {
    console.log(selVal.value);
    btn.disabled = true;
    output.innerHTML = 'searching...';
    fetch(url + "/" + selVal.value)
        .then(rep => rep.json())
        .then(data => {
            myOutput(data, selVal.value);
        });
});

function myOutput(data, val) {
    const total = data.results;
    btn.disabled = false;
    output.innerHTML = `Search for ${val}`;
    console.log(data);
    total.forEach(ele => {
        if (selVal.value == 'films') {
            output.innerHTML += `<div>${ele.title}</div>`;
        }

        if (selVal.value == 'people') {
            output.innerHTML += `<div>${ele.name}</div>`;
        }

        if (selVal.value == 'planets') {
            output.innerHTML += `<div>${ele.name}</div>`;
        }

        if (selVal.value == 'vehicles') {
            output.innerHTML += `<div>${ele.name} : ${ele.model}</div>`;
        }

    });

}