import React, { Component } from 'react';
import siteQuince from'../assets/images/half_blood_quince.png';
import siteGeek from'../assets/images/thinkgeek_clone.png';
import sitePeru from'../assets/images/travel_peru.png';

//styles
import './App.scss';
import '../assets/sass/main.scss';

class App extends Component {
  render() {
    return (
      <div>
      Luke's Site Portfolio
      <body class="is-preload">
			   <div id="page-wrapper">

					<header id="header" class="alt">
						<h1><a href="index.html">Solid State</a></h1>
						<nav>
							<a href="#menu">Menu</a>
						</nav>
					</header>

					<nav id="menu">
						<div class="inner">
							<h2>Menu</h2>
							<ul class="links">
								<li><a href="index.html">Home</a></li>
								<li><a href="generic.html">Generic</a></li>
								<li><a href="elements.html">Elements</a></li>
								<li><a href="#">Log In</a></li>
								<li><a href="#">Sign Up</a></li>
							</ul>
							<a href="#" class="close">Close</a>
						</div>
					</nav>

					<section id="banner">
						<div class="inner">
							<div class="logo"><span class="icon fa-diamond"></span></div>
							<h2>This is Solid State</h2>
							<p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
						</div>
					</section>

					<section id="wrapper">

							<section id="one" class="wrapper spotlight style1">
								<div class="inner">
									<a href="https://www.halfbloodquince.com" class="image"><img src={siteQuince} alt="Half-Blood Quince Site" /></a>
									<div class="content">
										<h2 class="major">Half-Blood Quince</h2>
										<p>Eat it!</p>
										<a href="https://www.halfbloodquince.com" class="special">Learn more</a>
									</div>
								</div>
							</section>

							<section id="two" class="wrapper alt spotlight style2">
								<div class="inner">
									<a href="https://thinkgeek-clone.firebaseapp.com" class="image"><img src={siteGeek} alt="ThinkGeek Clone Site" /></a>
									<div class="content">
										<h2 class="major">ThinkGeek Site Clone</h2>
										<p>Look how good this is!</p>
										<a href="https://thinkgeek-clone.firebaseapp.com" class="special">Learn more</a>
									</div>
								</div>
							</section>

							<section id="three" class="wrapper spotlight style3">
								<div class="inner">
									<a href="https://travel-peru.firebaseapp.com" class="image"><img src={sitePeru} alt="Travel Peru Site" /></a>
									<div class="content">
										<h2 class="major">Travel Peru</h2>
										<p>Work in Practice</p>
										<a href="https://travel-peru.firebaseapp.com" class="special">Learn more</a>
									</div>
								</div>
							</section>

							<section id="four" class="wrapper alt style1">
								<div class="inner">
									<h2 class="major">Crestfallen - Keep?</h2>
									<p>Don't forget about this link: <a href="https://crestfallen-game.firebaseapp.com">Crestfallen</a></p>
									<section class="features">
										<article>
											<a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
											<h3 class="major">Sed feugiat lorem</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
											<h3 class="major">Nisl placerat</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
											<h3 class="major">Ante fermentum</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
											<h3 class="major">Fusce consequat</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
									</section>
									<ul class="actions">
										<li><a href="#" class="button">Browse All</a></li>
									</ul>
								</div>
							</section>

					</section>

					<section id="footer">
						<div class="inner">
							<h2 class="major">Get in touch</h2>
							<p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
							<form method="post" action="#">
								<div class="fields">
									<div class="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="4"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
							<ul class="contact">
								<li class="fa-home">
									Untitled Inc<br />
									1234 Somewhere Road Suite #2894<br />
									Nashville, TN 00000-0000
								</li>
								<li class="fa-phone">(000) 000-0000</li>
								<li class="fa-envelope"><a href="#">information@untitled.tld</a></li>
								<li class="fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
								<li class="fa-facebook"><a href="#">facebook.com/untitled-tld</a></li>
								<li class="fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
							</ul>
							<ul class="copyright">
								<li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>

			</div>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
      </div>
    );
  }
}

export default App;
