const myPromise = new Promise((resolve, reject) => {

})
console.log(myPromise);
myPromise.then((value) => {

}).catch((error) => {

})
const URL1 = `https://dog.ceo/api/breeds/image/random`;
const URL2 = `https://jsonplaceholder.typicode.com/`;

fetch(URL2)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        // console.log(error.message);
        console.log('Что-то пошло не так');
    });

const getData = async (URL1) => {
    try {
        const res = await fetch(URL1);
        const dataFromServer = await res.json();
        return dataFromServer;
    } catch (error) {
        console.log(error.message);
    }
};

// console.log(fetchData);

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', async (e) => {
    const fetchData = await getData(URL1);
    const imgEl = document.querySelector('img');
    imgEl.src = fetchData.message;
});
