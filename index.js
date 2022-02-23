// Write your code in this file!
const currentUser = 'Grace Hopper'; 

const welcomeMessage = `Welcome to Flatbook,  ${currentUser}!`;


const myString = 'template literal';
const myNumber = 10;
const myBoolean = false;

console.log(`Saying that interpolation with ${myString}s is better \n than concatenation ${90 + myNumber}% of the time ${myBoolean}. But it is pretty cool!`
)



const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;


function isRose(cat){
    if(cat === 'rose'){
        return 'Hi Rose you are cute!'
    } else{
        return `Hi ${cat}!`

    }
}