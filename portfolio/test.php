<div class="container">
  <div class="showSlider fade">
    <img src="/images/art.jpg" alt= "Entering Library"/>
    <div class="contentBook">This is the best content</div>
  </div>
  <div class="showSlider fade">
    <img src="/images/Asset1.png" alt = "Select Book"/>
    <div class="contentBook">Select your book</div>
  </div>
  <div class="showSlider fade">
    <img src="assets/register.jpeg" alt="Registering ID"/>
    <div class="contentBook">Register your Library ID</div>
  </div>
  <div class="showSlider fade">
    <img src="assets/read.jpeg" alt= "Returning Book"/>
    <div class="contentBook">Return your book after 7 days</div>
  </div>
  <a class="left" onclick="nextSlide(-1)">❮</a>
  <a class="right" onclick="nextSlide(1)">❯</a>
</div>
<script   src="https://code.jquery.com/jquery-3.6.0.js"   integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="   crossorigin="anonymous"></script>
<script>
  $(document).ready(function(){
    $.getJSON('/info.json', function(e){
      console.log(e);
    });
  });
</script>
