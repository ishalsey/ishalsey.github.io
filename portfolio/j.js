let buttons = document.querySelectorAll(".buttons");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    const et = e.target;
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    et.classList.add("active");
    let allContent = document.querySelectorAll(".content");
    for (content of allContent) {
      if (content.getAttribute("data-number") === button.getAttribute("data-number")) {
        content.style.display = "grid";
      } else {
        content.style.display = "none";
      }
    }
  });
}

const exit = document.querySelector('#exit');
const popBack = document.querySelector('.popBack');
const hide = document.querySelector('.hide');
const info = document.querySelector('.info');
const emptyA = document.querySelector('.about');
const emptyI = document.querySelectorAll('.container img');

exit.addEventListener('click', (e) => {
  popBack.classList.toggle('hide');
  emptyA.innerHTML = '';
  document.querySelectorAll('.showSlider').forEach(e => e.remove());
});

const calls = document.querySelectorAll(".content a");
for (let call of calls) {
  call.addEventListener('click', (e) => {
    const et = e.target;
    popBack.classList.toggle('hide');
    fetch('info.json')
      .then(data => data.json())
      .then(data => {
          let info = data['information'];
          console.log(e);
          console.log(call);
          Object.entries(info).forEach(([key, maindata]) => {
            console.log(key);
            console.log(call.getAttribute('data-number'));
            if (key == call.getAttribute('data-number')) {
              const container = document.querySelector('.container');
              const aboutInfo = document.querySelector('.about');
              let showSlider = document.createElement('div');
              let img = document.createElement('img');
              let contentBook = document.createElement('div');
              let p = document.createElement('p');
              let h = document.createElement('h2');
              showSlider.classList.add('showSlider');
              showSlider.classList.add('fade');
              contentBook.classList.add('contentBook');
              aboutInfo.innerHTML = "";
              container.appendChild(showSlider);
              showSlider.appendChild(img);
              showSlider.appendChild(contentBook);
              aboutInfo.appendChild(h);
              aboutInfo.appendChild(p);
              contentBook.innerHTML = maindata['contentBook'];
              img.src = maindata['image'];
              h.innerHTML = maindata['head'];
              p.innerHTML = maindata['paragraph'];
            };
        });
      });
  });
}

var slide_index = 1;
slidesDisplay(slide_index);

function nextSlide(n) {
  slidesDisplay(slide_index += n);
}

function currentSlide(n) {
  slidesDisplay(slide_index = n);
}

function slidesDisplay(n) {
  var i;
  var slides = document.getElementsByClassName("showSlider");
  if (n > slides.length) {
    slide_index = 1
  }
  if (n < 1) {
    slide_index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
