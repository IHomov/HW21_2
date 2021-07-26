
    
    //Массив хранит значение температуры за 90 дней зимы

    let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

let up = 0;
let down = 0;

for (let i = 0; i < winterDays.length - 1; i++) {
    if (winterDays[i + 1] >= 0 && winterDays[i] < 0) {
        up++;
    }
    else if (winterDays[i + 1] < 0 && winterDays[i] >= 0) {
        down++;
    }
}
console.log(`Потеплений: ${up}, Похолоданий: ${down}`);


//Рассчет самого большого количества дней с отрицательнгой температурой
let minus = 0;
let maxMinus = 0;
for (let j = 0; j < winterDays.length; j++) {
    if (winterDays[j] < 0) {
        minus++;
        if (minus > maxMinus) {
            maxMinus = minus;
        }
    }
    else if (winterDays[j] >= 0) {
        minus = 0;
    }
    
}
console.log(`Max days of negative temperature are : ${maxMinus}`);