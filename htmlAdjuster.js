let button = document.getElementById("submit");
let input = document.getElementById("input");
let output = document.getElementById("output");

function convertHTML() {
  const Regex = /\s\bclass\b/;
  let html = input.value;
  if (html) {
    let spltd = html.split(Regex);
    let jnd = spltd.join("className");
    output.textContent = jnd;
  } else {
    output.textContent = "Please insert an input";
  }
}

function copyText(e) {
  e.target.select();
}

button.onclick = convertHTML;
output.onclick = copyText;
input.onclick = copyText;
