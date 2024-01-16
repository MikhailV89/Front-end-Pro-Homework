'use strict';
function potatoPrice(litersBorsch, weightOnePotato, priceKgPotato) {
    let weightPotato = (litersBorsch * 4 * weightOnePotato) / 1000;
   
    weightPotato = Math.ceil(weightPotato);

    const totalPrice = weightPotato *priceKgPotato;

    return {
        totalPrice: totalPrice,
        weightPotato: weightPotato
    };
}

const litersBorsch = 48;
const weightOnePotato = 75;
const priceKgPotato = 13;

const result = potatoPrice(litersBorsch, weightOnePotato, priceKgPotato);
console.log(`Вартість ${result.weightPotato}кг картоплі для борщу ${result.totalPrice} грн.`);
