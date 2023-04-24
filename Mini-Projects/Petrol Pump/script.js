const pricePerLitres = 1.47;

const unhookBtn = document.getElementById("unhook");
const pumpBtn = document.getElementById("pump");
const stopBtn = document.getElementById("stop");

const priceDisplay = document.getElementById("price_display");
const litresDisplay = document.getElementById("litres_display");

const statusText = document.getElementById("status");

var currentCost = 0.00
var currentLitres = 0.00

var interval;

const unhookFun = () => {
    priceDisplay.value = 0.00;
    litresDisplay.value = 0.00;
    currentCost = 0;
    currentLitres = 0;
    statusText.textContent = "Unhooked. Please start pump";
}

const incrementCostLitres =() => {

    currentLitres += 0.09; // Rate at which the fuel is dispensed. 
    litresDisplay.value = currentLitres;

    currentCost = currentLitres * pricePerLitres;
    
    priceDisplay.value = currentCost;
}

const pumpFun = () => {

    statusText.textContent = "Fueling in progress";
    startTimer();
}

const stopFun = () => {

    statusText.textContent = `Pump stopped. You spent price on howmany litres`
    stopTimer();

}

const startTimer = () => {
    interval = setInterval(incrementCostLitres, 100);
}

const stopTimer = () => {
    clearInterval(interval);
}



unhookBtn.addEventListener("click", unhookFun)
pumpBtn.addEventListener("click", pumpFun)
stopBtn.addEventListener("click", stopFun)