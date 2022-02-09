import { getDog } from "../fetch-utils.js";
import { renderDogDetail } from "../render-utils.js";

const dogDetailContainer = document.getElementById("dog-detail-container");
console.log("is this working from details page?");
// console.log(window.location.search);

// on load
window.addEventListener("load", async () => {
  // get the id from URL
  const params = new URLSearchParams(window.location.search);
  const dog = await getDog(params.get("id"));

  // render and append this dog's details to the container
  const div = renderDogDetail(dog);
  dogDetailContainer.append(div);
});
