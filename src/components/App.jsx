import React, { Component } from 'react';
import siteQuince from'../assets/images/half_blood_quince.png';
import siteGeek from'../assets/images/thinkgeek_clone.png';
import sitePeru from'../assets/images/travel_peru.png';
import siteCrestfallen from'../assets/images/crestfallen.png';

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
							<p>Front-end Web Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React - Redux - JavaScript - Angular - Sass</p>
						</div>
					</section>

					<section id="wrapper">

						<section id="one" className="wrapper spotlight style1">
							<div className="inner">
								<a href="https://www.halfbloodquince.com" className="image"><img src={siteQuince} alt="Half-Blood Quince Site" /></a>
								<div className="content">
									<h2 className="major">Half-Blood Quince</h2>
									<p>Eat it!</p>
									<a href="https://www.halfbloodquince.com" className="special">Visit Page</a>
								</div>
							</div>
						</section>

						<section id="two" className="wrapper alt spotlight style2">
							<div className="inner">
								<a href="https://thinkgeek-clone.firebaseapp.com" className="image"><img src={siteGeek} alt="ThinkGeek Clone Site" /></a>
								<div className="content">
									<h2 className="major">ThinkGeek Site Clone</h2>
									<p>Look how good this is!</p>
									<a href="https://thinkgeek-clone.firebaseapp.com" className="special">Visit Page</a>
								</div>
							</div>
						</section>

						<section id="three" className="wrapper spotlight style3">
							<div className="inner">
								<a href="https://travel-peru.firebaseapp.com" className="image"><img src={sitePeru} alt="Travel Peru Site" /></a>
								<div className="content">
									<h2 className="major">Travel Peru</h2>
									<p>Work in Practice</p>
									<a href="https://travel-peru.firebaseapp.com" className="special">Visit Page</a>
								</div>
							</div>
						</section>

						<section id="four" className="wrapper alt spotlight style5">
							<div className="inner">
                <a href="https://crestfallen-game.firebaseapp.com" className="image"><img src={siteCrestfallen} alt="Crestfallen Game Site" /></a>
                <div className="content">
                  <h2 className="major">Crestfallen - Keep?</h2>
                  <p>Work in Practice</p>
                  <a href="https://crestfallen-game.firebaseapp.com" className="special">Visit Page</a>
                </div>
							</div>
						</section>

				</section>

				<section id="footer">
					<div className="inner">
						<h2 className="major">Get in touch</h2>
						<p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
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
