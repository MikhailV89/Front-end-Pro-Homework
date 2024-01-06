
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const birthYear = +prompt('Write your year of birth');
const fromWhichCity = prompt('What city do you live in?');
const favoriteSport = prompt('What is your favorite sport? football, basketball, boxing.');

if (!birthYear) {
    age = 'It is a pity that you did not want to enter your year of birth.';
} else {
    age = `You are ${currentYear - birthYear} years old.`;
}

if (!fromWhichCity) {
    city = 'It is a pity that you did not want to enter the name of the city in which you live.';
} else if (fromWhichCity === 'Kyiv') {
    city = 'You live in the capital of Ukraine';
} else if (fromWhichCity === 'London') {
    city = 'You live in the capital of Great Britain';
} else if (fromWhichCity === 'Washington') {
    city = 'You live in the capital of USA';
} else {
    city = `Do you live in a town ${fromWhichCity}`;
}

if (!favoriteSport) {
    sport = 'It is a pity that you did not want to play the sport that you like.';
} else if (favoriteSport === 'football') {
    sport = 'Cool!!! Do you want to be like Cristiano Ronaldo?';
} else if (favoriteSport === 'basketball') {
    sport = 'Cool!!! Do you want to be like Michael Jordan?'
} else if (favoriteSport === 'boxing') {
    sport = 'Cool!!! Do you want to be like Mike Tyson?';
} else {
    sport = `${favoriteSport}? Also a good sport.`;
}

alert(`
  ${age}
  ${city}
  ${sport}
`);

