function getRandomIntInclusive(min, max) {
  min = Math.cell(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min +1) + min);
}

function dataHandler(dataArray) {
  console.log('fired dataHandler');
  console.table(dataArray);
  const range = [...Array(15).keys()];
  range.forEach((item) => {
    console.log('range item', item);
  });
}


// As the last step of your lab, hook this up to index.html
async function mainEvent() { // the async keyword means we can make API requests
  console.log('form submission'); // this is substituting for a "breakpoint" 
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('.submit_button');
  const results = await fetch('/api/foodServicesPG');
  const arrayFromJson = await results.json();
  if(arrayFromJson.data.length > 0) {
    form.addEventListener('submit', async(submitEvent)=> {
      submitEvent.preventDefault();
      console.log('form submission');
      submit.style.display = 'block';
      data.dataHandler(arrayFromJson.data);

    });
  }
}

  
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests