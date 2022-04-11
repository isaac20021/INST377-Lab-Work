function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
  }
  function dataHandler(dataArray) {
    console.log('fired dataHandler');
    console.table(dataArray); // this is called "dot notation"
    const range = [...Array(15).keys()];
    const listItems = range.map((item, index) => {
      const restNum = getRandomIntInclusive(0, dataArray.length - 1);
      return dataArray[restNum];
    });
    console.log(listItems);
    return listItems;
    //range.forEach((item) => {
      //console.log('range item', item);
    //});
  //}
  function createHtmlList(collection) {
      console.log('fired HTML creator');
      console.table(collection);
      const targetList = document.querySelector('resto-list');
      consttargetList.innerHTML = '';
      collection.ForEach((item) => {
          const{name} = item;
          const displayName = name.toLowerCase();
          const injectThisItem = `<li>${displayName}</li>`;
          targetList.innerHTML += injectThisItem
      })
function initMap(targetID){
//TODO
//https://leafletjs.com/SlavaUkraini/ - leaflet tutorial

const map =  L.map(targetId).setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/titles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    titleSize:512,
    zoomOffset: -1,
    accessToken: ''
})
}
    
  }
  // Last step hook up to index.html
  async function mainEvent() { // the async keyword means we can make API requests
    console.log('script loaded'); //
    const form = document.querySelector('.main_form');
    const submit = document.querySelector('.submit_button');
    //submit.style.display = 'none';
    const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    console.log(arrayFromJson);
  
    if (arrayFromJson.data.length > 0) {
      submit.style.display = 'block';
      form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
        submitEvent.preventDefault(); // This prevents your page from refreshing!
        console.log('form submission'); // this is substituting for a "breakpoint"
        // arrayFromJson.data - we're accessing a key called 'data' on the returned object
        // it contains all 1,000 records we need
        const restoArray = dataHandler(arrayFromJson.data);
      });
    }
  }
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
  