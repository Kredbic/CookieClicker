let numberOfCookies = 0;
let upgradeLevel = 1;
let UpgradeAutoIncrease = 0;
let autoclicker;
let autoclickerprice = 100;
let upgradelevelprice = 50;
const upgradeRequirements = [
  25, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000,
  500000, 1000000, 2500000, 5000000, 10000000, 25000000, 50000000, 100000000,
  250000000, 500000000, 1000000000, 10000000000,
];
const upgradeImages = [
  "./res/img/IRON-2.png",
  "./res/img/IRON-3.png",
  "./res/img/BRONZE-1.png",
  "./res/img/BRONZE-2.png",
  "./res/img/BRONZE-3.png",
  "./res/img/SILVER-1.png",
  "./res/img/SILVER-2.png",
  "./res/img/SILVER-3.png",
  "./res/img/GOLD-1.png",
  "./res/img/GOLD-2.png",
  "./res/img/GOLD-3.png",
  "./res/img/PLAT-1.png",
  "./res/img/PLAT-2.png",
  "./res/img/PLAT-3.png",
  "./res/img/DIA-1.png",
  "./res/img/DIA-2.png",
  "./res/img/DIA-3.png",
  "./res/img/ASC-1.png",
  "./res/img/ASC-2.png",
  "./res/img/ASC-3.png",
  "./res/img/IMMO-1.png",
  "./res/img/IMMO-2.png",
  "./res/img/IMMO-3.png",
  "./res/img/RADIANT.png",
];

function updateImage() {
  for (let i = 0; i < upgradeRequirements.length; i++) {
    if (numberOfCookies >= upgradeRequirements[i]) {
      cookie.src = upgradeImages[i];
    } else {
      // If the current number of cookies is less than the requirement, break the loop
      break;
    }
  }
}

const cookie = document.getElementById("cookie");
cookie.onclick = () => {
  numberOfCookies += upgradeLevel;
  counter.innerHTML = "RR: " + numberOfCookies;
  updateImage(); // Call updateImage after each cookie click
};

const upgradeClicks = document.getElementById("UpgradeClicks");
upgradeClicks.onclick = () => {
  if (numberOfCookies >= upgradelevelprice) {
    numberOfCookies -= upgradelevelprice;
    counter.innerText = "RR: " + numberOfCookies;
    upgradelevelprice += 50;
    upgradeClicks.innerText = "Buy click upgrade: " + upgradelevelprice;
    upgradeLevel++;
    updateImage(); // Call updateImage after each upgrade purchase
  }
};

const upgradeAuto = document.getElementById("UpgradeAuto");
upgradeAuto.onclick = () => {
  if (numberOfCookies >= autoclickerprice) {
    numberOfCookies -= autoclickerprice;
    counter.innerText = "RR: " + numberOfCookies;
    autoclickerprice += 100;
    UpgradeAutoIncrease++;
    upgradeAuto.innerText = "Upgrade Auto: " + autoclickerprice;
    clearInterval(autoclicker);
    autoclicker = setInterval(() => {
      numberOfCookies += UpgradeAutoIncrease;
      counter.innerHTML = "RR: " + numberOfCookies;
    }, 1000);
    updateImage();
  }
};

const turnOnCheats = () => {
  numberOfCookies += 10;
  counter.innerText = "RR: " + numberOfCookies;
  updateImage(); // Call updateImage after enabling cheats
}

turnOnCheats();

function turnOnSuperChats() {
  numberOfCookies += 10;
  counter.innerText = "RR: " + numberOfCookies;
  updateImage(); // Call updateImage after enabling super cheats
}

turnOnSuperChats();
