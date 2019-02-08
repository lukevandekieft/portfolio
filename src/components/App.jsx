import React, { Component } from 'react';
import siteQuince from'../assets/images/quince.png';
import siteGeek from'../assets/images/thinkgeek3.png';
import sitePeru from'../assets/images/travel_peru.png';
import siteCrestfallen from'../assets/images/crestfallen.png';
import siteGoblin from'../assets/images/borf_house.png';

//styles
import './App.scss';
import '../assets/css/main.css';
import '../assets/sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className="is-preload">
			   <div id="page-wrapper">

					<section id="banner">
						<div className="inner">
							<h2>Luke Vandekieft</h2>
							<p>Junior Web Developer</p>
              <p>React - Redux - JavaScript - Angular - Sass</p>
						</div>
					</section>

					<section id="wrapper">

						<section id="one" className="wrapper spotlight style1">
							<div className="inner">
								<a href="https://www.halfbloodquince.com" className="image"><img src={siteQuince} alt="Half-Blood Quince Site" /></a>
								<div className="content">
									<h2 className="major">The Half-Blood Quince</h2>
									<p>My virtual cookbook for recipe management. In a market saturated with cooking apps this one seeks to maximize customization - add any recipe you like then edit, tweak, and comment away! I can finally store all my recipes in one place and add notes so I don't forget what I did to make the crust come out right. </p>
                  <p>Built with: React, Redux, Firebase, Sass</p>
									<a href="https://www.halfbloodquince.com" className="special">Visit Page</a>
								</div>
							</div>
						</section>

						<section id="two" className="wrapper alt spotlight style2">
							<div className="inner">
								<a href="https://thinkgeek-clone.firebaseapp.com" className="image"><img src={siteGeek} alt="ThinkGeek Clone Site" /></a>
								<div className="content">
									<h2 className="major">ThinkGeek Site Clone</h2>
									<p>A site clone of ThinkGeek, my favorite novelty shop for when you have no idea what to buy someone. I built this out with Angular and connected it to Firebase for content storage. All links are functional in case something catches your fancy.</p>
                  <p>Built with: Angular, ES6, webpack, Sass</p>
									<a href="https://thinkgeek-clone.firebaseapp.com" className="special">Visit Page</a>
								</div>
							</div>
						</section>

						<section id="three" className="wrapper spotlight style3">
							<div className="inner">
                <a href="https://lukevandekieft.github.io/borf-quest" className="image"><img src={siteGoblin} alt="Gobline Quest Game Site" /></a>
                <div className="content">
                  <h2 className="major">Goblin Quest - Rise of Borf</h2>
                  <p>Embark upon a journey to save your long-lost love in this classic text-based RPG. Goblin King Borf is no joke and he's not getting nerfed anytime soon - do you have what it takes to bring him down!?</p>
                  <p>Built with: JavaScript, jQuery, Sass, HTML</p>
                  <a href="https://lukevandekieft.github.io/borf-quest" className="special">Visit Page</a>
                </div>
							</div>
						</section>

						<section id="four" className="wrapper alt spotlight style5">
							<div className="inner">
                <a href="https://travel-peru.firebaseapp.com" className="image"><img src={sitePeru} alt="Travel Peru Site" /></a>
                <div className="content">
                  <h2 className="major">...And More!</h2>
                  <p>A Travel site, coworking layout, React Tamagotchi, and more await you on my Github.</p>
                  <p> I've worked primarily with front-end technologies like React, Redux, Angular, ES6, TypeScript, Sass, Less, and Sketch. Other project tools include webpack, Git, Firebase, Jest, Karma/Jasmin, and some AWS. Next up I'll be diving into Node.js.</p>
                  <a href="https://github.com/lukevandekieft?tab=repositories" className="special">See Project List</a>
                </div>
							</div>
						</section>

				</section>

				<section id="footer">
					<div className="inner centered">
						<h2 className="special">Currently available for hire</h2>
            <p className="footerParagraph">Accountant-turned-programmer who loves logic puzzles like board games, RPGs, and components that won't render. PNW native who travels when he can and spends his time reading, cooking, and gaming when he can't.</p>
            <p className="footerParagraph">I'd love to hear from you! Reach me at:</p>

            <ul className="icons">
  						<li><a href="mailto:vandekie@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
  						<li><a href="https://www.linkedin.com/in/lukevandekieft" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
  						<li><a href="https://github.com/lukevandekieft" className="icon fa-github"><span className="label">Github</span></a></li>
  					</ul>

						<ul className="copyright">
							<li>&copy; Luke Vandekieft. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
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
	</div>
    );
  }
}

export default App;
