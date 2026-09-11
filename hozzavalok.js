function recept()
{
    let letszam = document.getElementById('letszam').value;
    document.getElementById('tojas').innerText = letszam * 6;
    document.getElementById('liszt').innerText = letszam * 12;
    document.getElementById('cukor').innerText = letszam * 8;
}