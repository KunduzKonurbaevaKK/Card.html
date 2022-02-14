// Create elements

let main = document.createElement('main');
let divIdWrapper = document.createElement('div');
let divImg = document.createElement('div');
let imgBox = document.createElement ('img');
let imgBox__active = document.createElement('div');
let h3 = document.createElement('h3');
let p = document.createElement('p');

let divTimeBox = document.createElement('div');
let divTimeBoxItem1 = document.createElement('div');
let divTimeBoxItem2 = document.createElement('div');
let greenText = document.createElement('div');
let GreyText = document.createElement('div');


let avatarBlock = document.createElement('div');
let avatarImg = document.createElement('img');
let avatarName = document.createElement('p');
let avatar__name = document.createElement('a');

document.body.style.margin = '0';
document.body.style.padding = '0';

// style of main
main.style.width = '100%';
main.style.height = '100vh';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.gap = '30px';
main.style.flexWrap = 'nowrap';
main.style.backgroundColor = '#0D1A2D';



// style of  div#wrapper
divIdWrapper.id = 'wrapper';
divIdWrapper.style.width = '300px';
divIdWrapper.style.height = '580px';
divIdWrapper.style.backgroundColor= '#15273F';
divIdWrapper.style.borderRadius = '20px';
divIdWrapper.style.padding = '20px';
divIdWrapper.style.marginTop = '40px';
divIdWrapper.style.fontFamily = "'Poppins', sans-serif";

// style of wrapper__imgBox
divImg.className = 'wrapper__imgBox';
divImg.style.width = '300px';
divImg.style.height = '300px';
divImg.style.overflow = 'hidden';
divImg.style.position = 'relative';
divImg.style.borderRadius = '10px';

// style of img
imgBox.className = 'img';
imgBox.style.width = '100%';
imgBox.style.height = '100%';
imgBox.src="./images/image-equilibrium.jpg";

// style of imgBox__active
imgBox__active.className = 'imgBox__active';
imgBox__active.innerHTML =`<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>`;
imgBox__active.style.position = 'absolute';
imgBox__active.style.top = '0';
imgBox__active.style.left = '0';
imgBox__active.style.backgroundColor = 'rgba(3, 191, 216, 0.4)';
imgBox__active.style.width = '100%';
imgBox__active.style.height = '100%';
imgBox__active.style.display = 'flex';
imgBox__active.style.alignItems = 'center';
imgBox__active.style.justifyContent = 'center';
imgBox__active.style.opacity = '0';
imgBox__active.style.transition = 'ease .2s opacity';


//imgBox__active hover
imgBox__active.onmouseover = function () {
  imgBox__active.style.opacity = "1";
  imgBox__active.style.cursor = "pointer";
} 
imgBox__active.onmouseout = function () {
  imgBox__active.style.opacity = "0";
  imgBox__active.style.cursor = "pointer";
} 

// style of wrapper__title
h3.className = 'wrapper__title';
h3.style.color = '#fff';
h3.style.fontSize = '24px';
h3.innerText = 'Equilibrium #3429';

// wrapper__title:hover
h3.onmouseover = function () {
  h3.style.color = "#0CF7F5";
  h3.style.cursor = "pointer";
} 
h3.onmouseout = function () {
  h3.style.color = "#fff";
} 


// style of wrapper__subtitle
p.className = 'wrapper__subtitle';
p.style.color = '#95AACB';
p.innerText = 'Our equilibrium collection promotes balance and calm';


// style of timeBox
divTimeBox.className = 'timeBox';
divTimeBox.style.display = 'flex';
divTimeBox.style.justifyContent = 'space-between';
divTimeBox.style.flexWrap = 'nowrap';
divTimeBox.style.borderBottom = '1px solid #95AACB';
divTimeBox.style.paddingBottom = '20px';

// style of divTimeBoxItem1
divTimeBoxItem1.className = 'timeBox__item';
divTimeBoxItem1.style.display = 'flex';
divTimeBoxItem1.style.justifyContent = 'space-around';
divTimeBoxItem1.style.alignItems = 'center';

divTimeBoxItem1.innerHTML = `<svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>`;


// style of divTimeBoxItem2
divTimeBoxItem2.className = 'timeBox__item';
divTimeBoxItem2.style.display = 'flex';
divTimeBoxItem2.style.justifyContent = 'space-around';
divTimeBoxItem2.style.alignItems = 'center';

divTimeBoxItem2.innerHTML = `<svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>`;

// style of greenText
greenText.className = 'greenText';
greenText.style.color = '#0CF7F5';
greenText.style.marginLeft = '8px';
greenText.innerText = '0.041 ETH';

// style of GreyText
GreyText.className = 'GreyText';
GreyText.style.color = '#95AACB';
GreyText.style.marginLeft = '8px';
GreyText.innerText = '3 days left';


// style of avatarBlock
avatarBlock.className = 'avatarBlock';
avatarBlock.style.display = 'flex';
avatarBlock.style.justifyContent = 'fflex-start';
avatarBlock.style.flexWrap = 'nowrap';
avatarBlock.style.alignItems = 'center';
avatarBlock.style.paddingTop = '20px';


// style of avatarImg
avatarImg.className = 'avatarImg';
avatarImg.src="./images/image-avatar.png";
avatarImg.style.width = '40px';
avatarImg.style.height = '40px';
avatarImg.style.border = ' 1px solid #fff';
avatarImg.style.borderRadius = '50%';

// style of avatarName
avatarName.className = 'avatarName';
avatarName.innerHTML = 'Creation of';
avatarName.style.marginLeft = '20px';
avatarName.style.color = '#95AACB';


// style of avatar__name
avatar__name.className = 'avatar__name';
avatar__name.href = '#';
avatar__name.style.textDecoration = 'none';
avatar__name.style.color = '#EAF4F8';
avatar__name.innerText = ' Jules Wyvern';

// avatar__name hover
avatar__name.onmouseover = function () {
  avatar__name.style.color = "#0CF7F5";
  avatar__name.style.cursor = "pointer";
} 
avatar__name.onmouseout = function () {
  avatar__name.style.color = "#EAF4F8";
} 



// AppendChilds
document.body.appendChild(main);
main.appendChild(divIdWrapper);
divIdWrapper.appendChild(divImg);
divImg.appendChild(imgBox);
divImg.appendChild(imgBox__active);
divIdWrapper.appendChild(h3);
divIdWrapper.appendChild(p);
divIdWrapper.appendChild(divTimeBox);
divTimeBox.appendChild(divTimeBoxItem1);
divTimeBox.appendChild(divTimeBoxItem2);
divTimeBoxItem1.appendChild(greenText);
divTimeBoxItem2.appendChild(GreyText);

divIdWrapper.appendChild(avatarBlock);
avatarBlock.appendChild(avatarImg);
avatarBlock.appendChild(avatarName);
avatarName.appendChild(avatar__name);

alert('Я оцениваю свою работу на 110 баллов');