// create li element for our product bags
const bagsProductLi = document.createElement("li");

// where the element should go
// what is the parent element
// attach it to dom

const ol = document.querySelector("ol");
// console.log(ol);
ol.setAttribute("style", "grid-template-rows: repeat(7, 1fr);");

// append() - places element as the last one in list of nodes (adds el as the last child to parent el) - child to the el you called the method on
// prepend() - adds el as the first child to the parent el) - child to the el you called the method on
// before() - places el directly before the el calling the method - sibling
// after() - places el after the el calling the method - sibling

//add li to the dom
// calling the method on the el to the left of the dot notation
// argument is the el we're adding
ol.append(bagsProductLi);
// ol.prepend(bagsProductLi);

// add text
bagsProductLi.innerText = "Bags";

// add class to bags li
bagsProductLi.setAttribute("class", "product");

bagsProductLi.innerText += " & Wallets";

const h2 = document.querySelector("h2");

const newH2 = document.createElement("h2");
newH2.innerText = "HAPPY WEDNESDAY";
// h2.before(newH2);
h2.after(newH2);

// create header element
// create header children (h1, nav)
// h1 inner text
// append h1 and nav
// grab div .container
// prepend header to .container
// create ul for li
// append ul to nav
// create li
// for loop for creating li
// append li to ul
//create our a tags
// append a tag to li

//create header
const header = document.createElement("header");

// grab container
const container = document.querySelector("div.container");
console.log(container);

// attach header to container
container.prepend(header);

//create header children
const h1 = document.createElement("h1");
h1.innerText = "DOM MANIPULATION";
const nav = document.createElement("nav");

// adding h1 and nav to dom and parent
header.append(h1);
header.append(nav);

// create ordered list
const ul = document.createElement("ul");

// append ul to nav
nav.append(ul);

const aText = ["Home", "About", "Contact", "Reviews"];

for (let i = 0; i < aText.length; i++) {
  const navLi = document.createElement("li");
  const aTag = document.createElement("a");
  ul.append(navLi);
  navLi.append(aTag);
  aTag.setAttribute("href", "#");

  aTag.innerText = aText[i];
}

// bagsProductLi.classList.add("group");
bagsProductLi.classList.remove("product");

// if the class exists on the el, toggle removes it
// if the class does not exist on the el, toggle adds it
bagsProductLi.classList.toggle("product");
bagsProductLi.classList.toggle("product");
