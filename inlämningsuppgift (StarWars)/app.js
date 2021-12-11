
//old code ignore
/*let titles = [];
let release_date = []
let movie_charecters = [];



//GET movie title and realise date and render it out in innerHTML/#Movie

const getPosts = async () => {
  for (let index = 1; index < 7; index++) {
    const res = await fetch("https://swapi.dev/api/films/" + index);
  const data = await res.json();
titles.push(data.title);
  release_date.push(data.release_date);
  movie_charecters.push(data.characters);
  console.log(data);
  }  };
  
 
  console.log( release_date);
console.log(titles);
console.log(movie_charecters);

//documentar ut det som en string
document.querySelector("#movie").innerHTML = 
`<div class:poster><h3>${titles[0] + "<br />" + release_date[0]}</h3></div>
<div class:poster><h3>${titles[1] + "<br />" +  release_date[1]}</h3></div>
<div class:poster><h3>${titles[2] + "<br />" +  release_date[2]}</h3></div>
<div class:poster><h3>${titles[3] + "<br />" +  release_date[3]}</h3></div>
<div class:poster><h3>${titles[4] + "<br />" +  release_date[4]}</h3></div>
<div class:poster><h3>${titles[5] + "<br /> " +  release_date[5]}</h3></div>`;
};
*/

//new code
//declaration of the array variable
let movies = [];
//the function to fetch all the data from swappi
const getPosts = async () => {

    const res = await fetch("https://swapi.dev/api/films/" ); //the adress to fech from
  const data = await res.json(); //the variable that recives the data
  movies = data.results; //transfering the data that we want (.results) to the movies array
  console.log(movies); //see if it works
  //target the html div #movie 
  //take the movie array and create a new array with map() were we target the info we want.
  //make a arrow funtion were we render out what we want in a div.
  //also create a onClick="" funtion in the div to target the modal
  //put images in for fun uwu
 document.querySelector("#movie").innerHTML = movies.map((movie, index) => `<div onclick="openModal(${index})" style="cursor: pointer margin: 5px 0px; ">
 <h2>${movie.title}</h2>
 <p>${movie.release_date}</p>
 <img src="./img/${index}.jpg">
 </div>`)
};

//create a funtion for the modal with the information we want by async it with index
const openModal = async (index) => {
//creat a array with map.() with the names of the characters. named peps, and make a constant of it called promises
//make a arrowfunction and fetch the peps (names of the characters in the movie)
const promices = movies[index].characters.map((peps) => {
  return fetch(peps).then(res => res.json())
 })
 //create a constant called chips and have all the promise info in it
 //target the modal (in html) and put your targeted string information in the modal div
 //make it flex so its not just a one time use
const chips = await Promise.all(promices)
document.querySelector("#movie-modal-content").innerHTML = chips.map((chip, index) => `<div>${chip.name}</div>`)
document.getElementById("movie-modal-wrapper").style.display = "flex";
} ;

//activate when you load the website so you actually see the movies
window.addEventListener("load", () => {
  getPosts(); 
    
});


//Star wars modal open and close
//have the modal not be on display when not in use.
const closeMovieModal = () => {
  document.getElementById("movie-modal-wrapper").style.display = "none";
};
