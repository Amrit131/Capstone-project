/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const close = document.getElementsByClassName('hamburger-container')[0];
const menu = document.getElementsByClassName('menu-list')[0];

function toggle() {
  close.classList.toggle('close');
  menu.classList.toggle('show');
}

const list = document.getElementsByClassName('list');
for (let i = 0; i < list.length; i += 1) {
  list[i].addEventListener('click', () => {
    close.classList.remove('close');
    menu.classList.remove('show');
  });
}

function cardShow() {
  const cards = document.getElementsByClassName('cards1');
  const cardbtn = document.getElementsByClassName('cards-btn')[0];
  cardbtn.classList.toggle('hide');
  const cardbtn1 = document.getElementsByClassName('cards-btn1')[0];
  cardbtn1.classList.toggle('hide1');
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].classList.toggle('card-show');
  }
}

const objHtml = [{
  feedbackImg: './assets/images/testimonials/person1.jpg',
  heading: 'Julia Leda',
  detail: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law',
  location: 'From London, UK.'
},
{
  feedbackImg: './assets/images/testimonials/person2.jpg',
  heading: 'Jasmine Jefferson',
  detail: 'Lawyer at Squeal law firm Australia.',
  location: 'From Brisbane Australia.'
},
{
  feedbackImg: './assets/images/testimonials/person3.jpg',
  heading: 'Roma Foxx',
  detail: 'Model and actor, Hollywood',
  location: 'From Manchester England.'
},
{
  feedbackImg: './assets/images/testimonials/person4.jpg',
  heading: 'Ron Sanders',
  detail: 'Head of Data Management at a Venture Capital Firm.',
  location: 'From Istanbul Turkey.'
},
{
  feedbackImg: './assets/images/testimonials/person5.jpg',
  heading: 'Byeong-cheol.',
  detail: 'Captain Pilot at Etihad airways.',
  location: 'From Seoul South Korea.'
},
{
  feedbackImg: './assets/images/testimonials/person6.jpg',
  heading: 'Nick Diggiovani',
  detail: 'Italian Actor, Model and Chef.',
  location: 'From Rome Italy.'
}];

const section = document.getElementsByClassName('feedback-container')[0];
section.innerHTML = `
<div class="feedback-heading-container">
<h3 class="feedback-heading">Feedbacks</h3>
<hr id="line7">
</div>
<div class="feedback-content">
<div class="feedback-cards">
    <div class="cards">
        <div class="feedback-img">
            <img src="${objHtml[0].feedbackImg}" alt="Personal 1" class="card-img">
        </div>
        <div class="cards-details-container">
            <h4 class= 'card-heading'>${objHtml[0].heading}</h4>
            <p class="card-detail">${objHtml[0].detail}</p>
            <hr id="line8">
            <p class="about-person">${objHtml[0].location}</p>
        </div>
    </div>
    <div class="cards">
        <div class="feedback-img">
            <img src="${objHtml[1].feedbackImg}" alt="Personal 1" class="card-img">
        </div>
        <div class="cards-details-container">
            <h4 class= 'card-heading'>${objHtml[1].heading}</h4>
            <p class="card-detail">${objHtml[1].detail}</p>
            <hr id="line8">
            <p class="about-person">${objHtml[1].location}</p>
        </div>
    </div>
    <div class="cards1">
        <div class="feedback-img">
            <img src="${objHtml[2].feedbackImg}" alt="Personal 1" class="card-img">
        </div>
        <div class="cards-details-container">
            <h4 class= 'card-heading'>${objHtml[2].heading}</h4>
            <p class="card-detail">${objHtml[2].detail}</p>
            <hr id="line8">
            <p class="about-person">${objHtml[2].location}</p>
        </div>
    </div>
    <div class="cards1">
        <div class="feedback-img">
            <img src="${objHtml[3].feedbackImg}" alt="Personal 1" class="card-img">
        </div>
        <div class="cards-details-container">
            <h4 class= 'card-heading'>${objHtml[3].heading}</h4>
            <p class="card-detail">${objHtml[3].detail}</p>
            <hr id="line8">
            <p class="about-person">${objHtml[3].location}</p>
        </div>
    </div>
    <div class="cards1">
        <div class="feedback-img">
            <img src="${objHtml[4].feedbackImg}" alt="Personal 1" class="card-img">
        </div>
        <div class="cards-details-container">
            <h4 class= 'card-heading'>${objHtml[4].heading}</h4>
            <p class="card-detail">${objHtml[4].detail}</p>
            <hr id="line8">
            <p class="about-person">${objHtml[4].location}</p>
        </div>
    </div>
    <div class="cards1">
        <div class="feedback-img">
            <img src="${objHtml[5].feedbackImg}" alt="Personal 1" class="card-img">
        </div>
        <div class="cards-details-container">
            <h4 class= 'card-heading'>${objHtml[5].heading}</h4>
            <p class="card-detail">${objHtml[5].detail}</p>
            <hr id="line8">
            <p class="about-person">${objHtml[5].location}</p>
        </div>
    </div>
    <div class="cards-btn-container">
        <button onclick= "cardShow()" class="cards-btn" type="button" name="button">More <img src="./assets/images/down.png" alt="down arrow"></button>
        <button onclick= "cardShow()" class= "cards-btn1" type= "button" name="button">Less <img src="./assets/images/up.png" alt="down arrow"></button>
    </div>
</div>
</div>
`;