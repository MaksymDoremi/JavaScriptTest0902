const auta = [];

class Auto {
    constructor(znacka, model, rok, kilometry) {
        this.znacka = znacka;
        this.model = model;
        this.rok = rok;
        this.kilometry = kilometry;
    }
}


// Vrátí všechny Auta v autoserisu
function DisplayAllCars() {
    document.getElementById('carsPlace').innerHTML = '';


    for (var i = 0; i < auta.length; i++) {
    	if(auta[i] != undefined){
    		DisplayCar(i, auta[i]);
    	}
    	
    }
}

function DisplayCar(index, auto) {
    /*

    <div class="card text-center m-3" style="width: 18rem;" id="auta.length">
    	<div class="card-body">
    		<h5 class="card-title">Znacka Model</h5>
    		<p class="card-text">Rok: Kilometry: </p>
    		<a href="#" class="btn btn-danger" onclick="DeleteCar('index')">Delete</a>
    	</div>
    </div>
    */
    var div = document.createElement('div');
    div.classList.add("card");
    div.classList.add("text-center");
    div.classList.add("m-3");
    div.style = 'width: 18rem;';
    div.id = '' + index;

    var div2 = document.createElement('div');
    div2.classList.add('card-body');

    var h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerHTML = auto.znacka + " " + auto.model;

    var p = document.createElement('p');
    p.classList.add('card-text');
    p.innerHTML = "Rok: " + auto.rok + " km: " + auto.kilometry;

    var a = document.createElement('a');
    a.href = '#';
    a.classList.add('btn');
    a.classList.add('btn-danger');
    a.innerHTML = 'Delete';
    a.onclick = function() { DeleteCar(index) };

    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(a);

    div.appendChild(div2);

    document.getElementById('carsPlace').appendChild(div);

}
// Přidá auto do autoservisu
function AddCar() {
    var znacka = document.getElementById('znacka').value;
    var model = document.getElementById('model').value;
    var rok = document.getElementById('rok').value;
    var kilometry = document.getElementById('kilometry').value;

    auta[auta.length] = new Auto(znacka, model, rok, kilometry);

    alert('Auto přidáno úspešně');

    DisplayCar(auta.length - 1, auta[auta.length - 1]);

    document.getElementById('znacka').value = '';
    document.getElementById('model').value = '';
    document.getElementById('rok').value = '';
    document.getElementById('kilometry').value = '';
}

// Smaže auto z autoservisu
//udelam to pomoci buttonu na karte
function DeleteCar(index) {
	document.getElementById('carsPlace').removeChild(document.getElementById(index));
	auta[index] = undefined;
}