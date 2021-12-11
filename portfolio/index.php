<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://use.typekit.net/axt1afk.css">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="normalize.css">
  <title>My Portfolio</title>
</head>
<body>
  <div id="cover">
    <header>
      <h1>
        Hello, I'm <span>Isaiah Halsey</span>. <br>
        I'm ambitious and ready to work.
      </h1>
      <p><a href="#about_me">View my work &#8595;</a></p>
    </header>
    <main>
      <section id="about_me">
        <h2>ABOUT</h2>
        <article class="images">
          <img class="self" src="images/me.png" alt="Self portrait">
          <img class="graph" src="images/Picture1.png" alt="skill image">
        </article>

        <p>
          I am 26 years old and just got out of college, and I spent a lot of time working with small and large
          groups leading them on projects. I lead design thinking teams helping them know how to learn the design thinking process.
          I also assisted students in HTML and CSS to know how to do certain things with their websites to improve them.
          I have worked with Good to Go a gas station chain up in Rexburg and did research on when they should start investing into
          Electric Charging Stations and our team shared our results with the CEO of the business. I have a lot of leadership experience
          and work well with a team.
        </p>
      </section>
      <section class="project">
        <h2>PROJECTS</h2>
        <ul class="buttonArea">
          <li><a data-number="1" class="buttons active" href="javascript:void(0);">All</a></li>
          <li ><a data-number="2" class="buttons" href="javascript:void(0);">Web</a></li>
          <li><a data-number="3" class="buttons" href="javascript:void(0);">Graphic Design</a></li>
        </ul>
        <div class="contentArea">
          <article data-number="1" class="content grid">
            <a data-number="0" href="javascript:void(0);"><img src="images/books.pdf" alt="Book Cover Project"></a>
            <a data-number="1" href="javascript:void(0);"><img src="images/Art230-P01_mockup.jpg" alt="Letter Project"></a>
            <a data-number="2" href="javascript:void(0);"><img src="images/Business_Card_Mockup_023.png" alt="Bussiness Card"></a>
            <a data-number="3" href="javascript:void(0);"><img src="images/Poster Mockup.png" alt="Font Poster"></a>
            <a data-number="4" href="javascript:void(0);"><img src="images/phpLogo.png" alt="PHP Motors Website"></a>
            <a data-number="5" href="javascript:void(0);"><img src="images/weatherLogo.png" alt="Weather Site"></a>
            <a data-number="6" href="javascript:void(0);"><img src="images/innLogo.png" alt="Temple Inn"></a>
            <a data-number="7" href="javascript:void(0);"><img src="images/techLogo.png" alt="Tech Talk Site"></a>
          </article>
          <article data-number="2" class="content grid hide">
            <a data-number="4" href="javascript:void(0);"><img src="images/phpLogo.png" alt="PHP Motors Website"></a>
            <a data-number="5" href="javascript:void(0);"><img src="images/weatherLogo.png" alt="Weather Site"></a>
            <a data-number="6" href="javascript:void(0);"><img src="images/innLogo.png" alt="Temple Inn"></a>
            <a data-number="7" href="javascript:void(0);"><img src="images/techLogo.png" alt="Tech Talk Site"></a>
          </article>
          <article data-number="3" class="content grid hide">
            <a data-number="0" href="javascript:void(0);"><img src="images/books.pdf" alt="Book Cover Project"></a>
            <a data-number="1" href="javascript:void(0);"><img src="images/Art230-P01_mockup.jpg" alt="Letter Project"></a>
            <a data-number="2" href="javascript:void(0);"><img src="images/Business_Card_Mockup_023.png" alt="Bussiness Card"></a>
            <a data-number="3" href="javascript:void(0);"><img src="images/Poster Mockup.png" alt="Font Poster"></a>
          </article>
        </div>
      </section>
    </main>
    <footer>
      <img class="arrow" src="images/triangle.png" alt="arrow">
      <h2>Contact<br> Me</h2>
      <p>Want to chat? Send me a message.</p>
      <form action="mailto:tech_todays@outlook.com" method="post">
        <label for="name"></label>
        <input type="text" name="name" id="name" placeholder="Name"><br>
        <label for="email"></label>
        <input type="email" name="email" id="email" placeholder="Email"><br>
        <label for="message"></label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea><br>
        <input type="submit" value="Submit">
      </form>
    </footer>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/popup.php'; ?>
  </div>
  <script src="java.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.js"   integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="   crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/cf4677fbc3.js" crossorigin="anonymous"></script>
</body>
</html>
