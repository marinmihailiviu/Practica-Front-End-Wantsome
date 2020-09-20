//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

function sqrNum () {
    // <input type="number" id="square" size="2" />
    const squareInputValue = document.getElementById("square").value;
    const solutionDiv = document.getElementById("sol");
    solutionDiv.innerHTML = squareInputValue * squareInputValue; // in loc de innerHTML functioneaza si .textContent
}

function halfNum () {
    //<input type="number" id="half" size="2" />
    const halfInputValue = document.getElementById("half").value;
    const solutionDiv = document.getElementById("sol");
    solutionDiv.innerHTML = halfInputValue / 2;
}

function percentNum () {
    //<input type="number" id="percent1" size="2" />
    const percent1InputValue = document.getElementById("percent1").value;
    const percent2InputValue = document.getElementById("percent2").value;
    const res = percent1InputValue * 100 /  percent2InputValue
    const solutionDiv = document.getElementById("sol");
    solutionDiv.innerHTML = res + "%";
}

function areaCircle () {
    //<input type="number" id="area" size="2" />
    const areaInputValue = document.getElementById("area").value;
    const pi = 3.14; 
    const solutionDiv = document.getElementById("sol");
    solutionDiv.innerHTML = pi * areaInputValue**2;

}

document.getElementById("sqr-btn").addEventListener("click", sqrNum);
document.getElementById("half-btn").addEventListener("click", halfNum);
document.getElementById("prc-btn").addEventListener("click", percentNum);
document.getElementById("area-btn").addEventListener("click", areaCircle);

// <button id="sqr-btn">Calculate</button>
// <button id="half-btn">Calculate</button>
// <button id="prc-btn">Calculate</button>
// <button id="area-btn">Calculate</button>

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei



//3
// Bonus: faceti sa functioneze si la key press pe langa click
