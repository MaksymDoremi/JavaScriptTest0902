// Vrátí všechny Auta v autoserisu
// Přidá auto do autoservisu
// Smaže auto z autoservisu

const auta = [];

class Auto {
    constructor(znacka, model, rok, kilometry) {
        this.znacka = znacka;
        this.model = model;
        this.rok = rok;
        this.kilometry = kilometry;
    }
}

function AddCar() {
    var znacka = document.getElementById('znacka').value;
    var model = document.getElementById('model').value;
    var rok = document.getElementById('rok').value;
    var kilometry = document.getElementById('kilometry').value;

    auta[auta.length] = new Auto(znacka, model, rok, kilometry);

    alert('Auto přidáno úspešně');
}