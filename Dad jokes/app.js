const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var i = 1;
document.querySelectorAll('.btn').forEach(function(e) {
  e.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[i];
      i++;
			if (i === colors.length){
				i=0;
			}
  })
});
generateJoke()
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    },
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}
