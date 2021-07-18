const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo);


// NAV-BAR
let navbar = document.querySelectorAll("nav a");
console.log('navbar',navbar);

navbar.forEach((item,index)=> {
    console.log('item',item)
    num = index+1
    let name_item = 'nav-item-'+num;
    item.textContent = siteContent.nav[name_item];
    item.style.color = "green";
});

const aNew = document.createElement("a");
const aNewText = document.createTextNode("Sale 40% Off");
aNew.appendChild(aNewText)
document.getElementsByTagName('nav')[0].appendChild(aNew)
aNew.style.color = "green"

const aNew2 = document.createElement("a");
const aNewText2 = document.createTextNode("New Arrivals");
aNew2.appendChild(aNewText2)
document.getElementsByTagName('nav')[0].prepend(aNew2)
aNew2.style.color = "green"


// navbar.appendChild()

// const navtext = document.getElementById("logo-img").alt;
// navtest.style.color = "red";

// CTA

const hTxt = document.querySelector('.cta h1')
hTxt.textContent = siteContent.cta.h1;

const hrBtn = document.querySelector('.cta button');
hrBtn.textContent = siteContent.cta.button;

const hImg = document.querySelector('#cta-img');
hImg.setAttribute('src', siteContent['cta']['img-src']);


// MAIN

const McH4 = document.querySelectorAll(".text-content h4");
McH4[0].textContent = siteContent['main-content']['features-h4'];
McH4[1].textContent = siteContent['main-content']['about-h4'];
McH4[2].textContent = siteContent['main-content']['services-h4'];
McH4[3].textContent = siteContent['main-content']['product-h4'];
McH4[4].textContent = siteContent['main-content']['vision-h4'];


const McP = document.querySelectorAll('.text-content p');
McP[0].textContent = siteContent['main-content']["features-content"];
McP[1].textContent = siteContent['main-content']["about-content"];
McP[2].textContent = siteContent['main-content']["services-content"];
McP[3].textContent = siteContent['main-content']["product-content"];
McP[4].textContent = siteContent['main-content']["vision-content"];

const mImg = document.getElementById('middle-img');
mImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//CONTACT INFO

const cH4 = document.querySelector(".contact h4");
cH4.textContent = siteContent.contact["contact-h4"];

const cP = document.querySelectorAll('.contact p');
cP[0].textContent = siteContent.contact.address;
cP[1].textContent = siteContent.contact.phone;
cP[2].textContent = siteContent.contact.email;


//  FOOTER

const fP = document.querySelector('footer p');
fP.textContent = siteContent.footer.copyright;
