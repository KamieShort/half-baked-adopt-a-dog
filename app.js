/* eslint-disable quotes */
/* eslint-disable indent */
import { getDogs } from "./fetch-utils.js";
import { renderDogCard } from "./render-utils.js";

const dogListContainer = document.getElementById("dog-list-container");

// on load
async function loadData() {
  const dogs = await getDogs();
  //   console.log(dog);
  // fetch all dogs
  for (let dog of dogs) {
    const li = renderDogCard(dog);
    dogListContainer.append(li);
  }
}
// render and append all dog cards to the container
loadData();
