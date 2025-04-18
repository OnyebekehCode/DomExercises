const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const container1 = document.querySelector("#container");

const contentp = document.createElement("p");
contentp.classList.add("para");
contentp.textContent = " Damn, i got this";

container1.appendChild(contentp);

const container2 = document.querySelector("#container");

const contenth = document.createElement("h3");
contenth.classList.add("heda");
contenth.textContent = " Damn, i got this too";

container2.appendChild(contenth);


const container3 = document.querySelector("#container");

const contentd = document.createElement("div");
contentd.classList.add("divi");
contentd.textContent = " Damn, i got this, sharp";
contentd.style.backgroundColor = "pink";
contentd.style.borderColor = "black";
const content1 = document.createElement("h3");
content1.classList.add("heda2");
content1.textContent = " Damn, i got this, sharp inside it";

const content2 = document.createElement("h3");
content2.classList.add("heda2");
content2.textContent = " Damn, i got this, sharp inside innit";

contentd.appendChild(content1);

contentd.appendChild(content2);

container3.appendChild(contentd);


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("fuck me all the time wasted");
});

