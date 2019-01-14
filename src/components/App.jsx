import React, { Component } from 'react';
import siteQuince from'../assets/images/half_blood_quince.png';
import siteGeek from'../assets/images/thinkgeek_clone.png';
import sitePeru from'../assets/images/travel_peru.png';
import siteCrestfallen from'../assets/images/crestfallen.png';
import siteGoblin from'../assets/images/goblin_quest3.png';

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
							<p>Front-end Web Developer</p>
              <p>React - Redux - JavaScript - Angular - Sass</p>
						</div>
					</section>

					<section id="wrapper">

						<section id="one" className="wrapper spotlight style1">
							<div className="inner">
								<a href="https://www.halfbloodquince.com" className="image"><img src={siteQuince} alt="Half-Blood Quince Site" /></a>
								<div className="content">
									<h2 className="major">The Half-Blood Quince</h2>
									<p>A virtual cookbook for saving, uploading, and editing recipes. In a market saturated with recipe apps this one seeks to maximize customization: add any ingredients, notes, and directions you'd like without content limitations or ads!</p>
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
									<p>A site clone of the novelty online store ThinkGeek built with Angular. All links lead back to the full site in case anything catches your fancy.</p>
                  <p>Built with: Angular, JavaScript, webpack, Sass</p>
									<a href="https://thinkgeek-clone.firebaseapp.com" className="special">Visit Page</a>
								</div>
							</div>
						</section>

						<section id="three" className="wrapper spotlight style3">
							<div className="inner">
                <a href="https://lukevandekieft.github.io/borf-quest" className="image"><img src={siteGoblin} alt="Gobline Quest Game Site" /></a>
                <div className="content">
                  <h2 className="major">Goblin Quest - Rise of Borf</h2>
                  <p>A text-based RPG where the hero embarks to save their long-lost love from goblin king Borf. Do you have what it takes to face him down?</p>
                  <p>Built with: JavaScript, jQuery, Sass, HTML</p>
                  <a href="https://lukevandekieft.github.io/borf-quest" className="special">Visit Page</a>
                </div>
							</div>
						</section>

						<section id="four" className="wrapper alt spotlight style5">
							<div className="inner">
                <a href="https://travel-peru.firebaseapp.com" className="image"><img src={sitePeru} alt="Travel Peru Site" /></a>
                <div className="content">
                  <h2 className="major">Travel Peru</h2>
                  <p>Work in progress - check back soon!</p>
                  <a href="https://travel-peru.firebaseapp.com" className="special">Visit Page</a>
                </div>
							</div>
						</section>

				</section>

				<section id="footer">
					<div className="inner centered">
						<h2 className="special">Currently available for hire</h2>
            <p>I'd love to hear from you! You can reach me at:</p>

            <ul class="icons">
  						<li><a href="mailto:vandekie@gmail.com" class="icon fa-envelope"><span class="label">Email</span></a></li>
  						<li><a href="https://www.linkedin.com/in/lukevandekieft" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
  						<li><a href="https://github.com/lukevandekieft" class="icon fa-github"><span class="label">Github</span></a></li>
  					</ul>

						<ul className="copyright">
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
	</div>
    );
  }
}

export default App;
