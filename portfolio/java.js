let buttons = document.querySelectorAll(".buttons");
const exit = document.querySelector('#exit');
const calls = document.querySelectorAll(".content a");
const popBack = document.querySelector('.popBack');
const hide = document.querySelector('.hide');
const info = document.querySelector('.info');
const container = document.querySelector('.container');
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

exit.addEventListener('click', (e) => {
  popBack.classList.add('hide');
  document.querySelectorAll('.showSlider img').forEach(e => e.remove());
  document.querySelectorAll('.contentBook').forEach(e => e.remove());
});

for (let call of calls) {
  call.addEventListener('click', (e) => {
    slidesDisplay(slide_index);
    popBack.classList.remove('hide');
    fetch('info.json')
      .then(data => data.json())
      .then(data => {
          let info = data['information'];
          console.log(Object.entries(info));
          Object.entries(info).forEach(([key, maindata]) => {
            if (key == call.getAttribute('data-number')) {
              for (let i = 1; i <= 3; i++) {
                let showSlider = document.querySelector('.all'+i);
                let img = document.createElement('img');
                let contentBook = document.createElement('div');
                let imgJ = maindata['image'+i];
                contentBook.classList.add('contentBook');
                showSlider.appendChild(img);
                showSlider.appendChild(contentBook);
                contentBook.innerHTML = maindata['contentBook'+i];
                img.src = imgJ;
              }
              const aboutInfo = document.querySelector('.about');
              aboutInfo.innerHTML = '';
              let p = document.createElement('p');
              let h = document.createElement('h2');
              aboutInfo.appendChild(h);
              aboutInfo.appendChild(p);

              h.innerHTML = maindata['head'];
              p.innerHTML = maindata['paragraph'];
            };
        });
      });
  });
}

//slideshow build


  var slide_index = 1;

  function nextSlide(n) {
    slidesDisplay(slide_index += n);
  }

  function currentSlide(n) {
    slidesDisplay(slide_index = n);
  }

  function slidesDisplay(n) {
    let i;
    const slides = document.getElementsByClassName("showSlider");
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
