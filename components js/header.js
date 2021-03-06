const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =  `
<style>
:root {
  --color-1: #102A67;
  --color-2: #225ADC;
  --color-3: #263238;
  --color-4: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}


header {
    background-color: var(--color-4);
    position: sticky;
    top: 0%;
    left: 0;
    right: 0;
  }

a,
li {
    list-style: none;
    text-decoration: none;
    color: inherit;
}


nav {
  display: flex;
  width: 100%;
  height: 100px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;
  /* flex-wrap: wrap; */
}

.logo img {
  width: 60%;
}

.links{
  /* display: flex; */
  list-style: none;
  align-items: center;
}
.link {
  display: inline-block;
  margin: 0 50px 0 0;
  color: var(--color-1);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.link:hover,
.link .active {
  font-size: 20px;
  color: var(--color-2);
  transition: all 200ms ease-in-out;
}

nav .menu-btn i {
  color: var(--color-1);
  font-size: 24px;
  cursor: pointer;
  display: none;
}

input[type="checkbox"] {
  display: none;
}

/* FOOTER STYLING */

footer {
    background-color: var(--color-1);
    height: auto;
    padding: 20px 120px 20px 100px;
    overflow: hidden;
}

.logo-area img {
    width: 65%;
}

.footer-container {
    display: grid;
    grid-template-areas: "container-1 maps container-2";
    grid-template-columns: 2fr 1fr 2.5fr;
    /* justify-content: space-between; */
}

.container-1{
    display: flex;
    flex-direction: column;
    color: var(--color-4);
    grid-area: container-1;
}

.container-2 {
  grid-area: container-2;
}

.container-3{
    display: none;
    color: #fff;
}

.maps {
    margin: 0 20px;
    grid-area: maps;
}

.maps li {
  
  margin: 15px 0 0 0;
}

.maps li a {
    font-size: 14px;
    color: #fff;
}
.maps li a:hover {
    transform: scale(0.7);
    color: var(--color-3);
    transition: all 300ms ease-in-out;
}

.container-2 {
    color: #fff;
}
.subscribe p {
    font-size: 20px;
    font-weight: 600;
    color: rgba(255,255,255, 0.8);
    margin: 0 0 15px 20px;
}

.submit {
    display: flex;
    margin-left: 20px;
}

.submit input#email{
    border-radius: 10px 0px 0px 10px;
    border: none;
    flex: 1;
}
.submit input:nth-of-type(1) {
    height: 60px;
    width: 60%;
    padding-left: 20px;
}
.submit input:nth-of-type(2) {
    width: 20%;
    background: var(--color-2);
    /* box-shadow: 0px 8px 12px var(--color-3); */
    border: none;
    border-radius: 0px 10px 10px 0px;
    font-size: 15px;
    color: #fff;
    
    cursor: pointer;
}
.submit input:nth-of-type(2):hover {
    background: var(--color-3);
    border: 1px solid white;
    transition: all 300ms linear;
}


.social-media {
    margin-top: 10px;
}
.social-media i{
    width: 40px; 
    height: 40px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.651);
    border-radius: 50%;
    margin: 10px 7px 0 0;
    color: var(--color-1);
    text-align: center;
    line-height: 42px;
    font-size: 24px;
}

.social-media i:hover {
    transform: scale(1.2);
    color: var(--color-4);
    transition: all 300ms ease-in-out;
    background-color: var(--color-2);
}

.footnote {
    color: rgba(255, 255, 255, 0.733);
    font-size: 12px;
    margin-top: 50px;
    text-align: right;
}


/* MEDIA QUERIES */
@media (max-width: 1000px) {
    nav {
      padding: 0 40px 0 50px;
    }
    footer {
        padding: 20px 20px 20px 30px;
    }
  }
  
  
  @media (max-width: 920px) {
    nav .menu-btn i {
      display: block;
    }
    #click:checked ~ .menu-btn i:before {
      content: "\f00d";
    }
    .links {
      position: fixed;
      top: 90px;
      left: -100%;
      background: var(--color-1);
      height: 50vh;
      width: 100%;
      text-align: center;
      display: block;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
      padding-bottom: 120px;
      border-bottom: 1px solid var(--color-4);
    }
    #click:checked ~ ul {
      left: 0;
    }
    .link a:hover,
    .link a.active {
      font-size: 16px;
      text-decoration: underline;
      transition: all 200ms ease-in-out;
  }
    .link {
      width: 100%;
      margin: 20px 0;
    }
  
    .link a {
      color: #fff;
      width: 100%;
      margin-left: -100%;
      display: block;
      font-size: 14px;
      font-weight: 600;
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    #click:checked ~ ul li a {
      margin-left: 0px;
    }
    .logo img {
      width: 60%;
      margin-left: -20px;
    }


    .footer-container {
      display: grid;
      grid-template-areas: "container-2 container-2"
                           "container-1 maps";
      grid-template-columns: 2fr 1fr;
      grid-template-rows: repeat(2, 1fr);
      /* justify-content: space-between; */
    }

    .container-1 {
      margin: 20px 0 0 10px;
    }

    .container-2 {
      margin-top: 20px;
    }

    .maps {
      margin-top: 10px;
    }

    .subscribe p {
      text-align: center;
      margin: 0 0 15px 0px;
  }
  
  .submit {
      margin: 0;
  }

  .footnote {
      text-align: center;
      font-size: 10px;
      margin-top: 50px;
  }

@media (max-width:425px){
    .logo-area img {
      width: 70%;
    }
    .links {
      padding: 60px 0 120px 0;
  
    }
    .submit input:nth-of-type(1) {
        height: 40px;
        width: 75%;
    }
    .submit input:nth-of-type(2) {
        margin-left: -10px;
        width: 25%;
        font-size: 12px;
        height: 40px;
    }
    .subscribe p {
        font-size: 16px;
    }
    .footer-container {
      grid-template-rows: 1fr 2fr;
      /* justify-content: space-between; */
    }
    .container-1 {
      margin-top: 40px;
    }
    .maps {
      margin-top: 20px;
    }
 }
}

@media (max-width: 325px){
  .links {
    padding: 90px 0 120px 0;
  }

}
</style>
<header>
      <div class="container">
        <nav>
          <a href="index.html">
            <div class="logo">
              <img src="images/Group 34.svg" alt="logo">
            </div>
          </a>
          <input type="checkbox" id="click">
          <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
          </label>
          <ul class="links">
            <li class="link"><a class="active" href="#">Home</a></li>
            <li class="link"><a href="#">Blog</a></li>
            <li class="link"><a href="#">About Us</a></li>
            <li class="link"><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
</header>
`;

class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.appendChild(headerTemplate.content);
     }
}


customElements.define('header-component', Header);