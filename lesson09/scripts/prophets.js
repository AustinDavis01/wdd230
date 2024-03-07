const cards = document.getElementById('cards');
const url = 'https://brotherblazzsard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data retreival
  }

getProphetData();
