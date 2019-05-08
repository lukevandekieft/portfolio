import React, { Component } from 'react';
import siteQuince from'../assets/images/quince.png';
import siteGeek from'../assets/images/thinkgeek3.png';
import sitePeru from'../assets/images/travel_peru.png';
import siteCrestfallen from'../assets/images/crestfallen.png';
import siteServerless from'../assets/images/serverless_guru3.png';

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
							<p>Front-End Web Developer</p>
              <p>React - Redux - JavaScript - Angular - Sass</p>
						</div>
					</section>

					<section id="wrapper">

            <section id="one" className="wrapper spotlight style1">
              <div className="inner">
                <a href="https://www.serverlessguru.com" target="_blank" rel="noopener noreferrer" className="image"><img src={siteServerless} alt="Gobline Quest Game Site" /></a>
                <div className="content">
                  <h2 className="major">Serverless Guru Homepage</h2>
                  <p>My first paid project was to convert my company's static HTML & jQuery site into a single page React app. My tendency to DIY every little animation quickly gave way to the more practical demand of using billable hours wisely: how much of this could be changed or should be changed versus actually <em>needing</em> to be changed? All in all I'm proud of how the project went and look forward to rolling out V2 in coming months.</p>
                  <p>Built with: React, AWS S3, and various animation libraries (Isotope, WowJS, React Hamburger Menu)</p>
                  <a href="https://www.serverlessguru.com" target="_blank" rel="noopener noreferrer" className="special">Visit Page</a>
                </div>
              </div>
						</section>

            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="https://www.halfbloodquince.com" target="_blank" rel="noopener noreferrer" className="image"><img src={siteQuince} alt="Half-Blood Quince Site" /></a>
                <div className="content">
                  <h2 className="major">The Half-Blood Quince</h2>
                  <p>My virtual cookbook for recipe management. In a market saturated with cooking apps this one seeks to maximize customization - add any recipe you like then edit, tweak, and comment away! I can finally store all my recipes in one place and add notes so I don't forget what I did to make the crust come out right. </p>
                  <p>Built with: React, Redux, Firebase, Sass</p>
                  <a href="https://www.halfbloodquince.com" target="_blank" rel="noopener noreferrer" className="special">Visit Page</a>
                </div>
              </div>
						</section>

						<section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href="https://thinkgeek-clone.firebaseapp.com" target="_blank" rel="noopener noreferrer" className="image"><img src={siteGeek} alt="ThinkGeek Clone Site" /></a>
                <div className="content">
                  <h2 className="major">ThinkGeek Site Clone</h2>
                  <p>A site clone of ThinkGeek, my favorite novelty shop for when you have no idea what to buy someone. I built this out with Angular and connected it to Firebase for content storage. All links are functional in case something catches your fancy.</p>
                  <p>Built with: Angular, ES6, webpack, Sass</p>
                  <a href="https://thinkgeek-clone.firebaseapp.com" target="_blank" rel="noopener noreferrer" className="special">Visit Page</a>
                </div>
              </div>
						</section>

            <section id="four" className="wrapper alt spotlight style5">
              <div className="inner">
                <a href="https://github.com/lukevandekieft" target="_blank" rel="noopener noreferrer" className="image"><img src={sitePeru} alt="Travel Peru Site" /></a>
                <div className="content">
                  <h2 className="major">...And More!</h2>
                  <p>See what else I've been working on at <a href="https://github.com/lukevandekieft" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                  <p> I help build client projects with Serverless Guru using React, AWS, GraphQL, Angular, ES6, Sass, and more. Learning on the job is keeping me busy so my tutorial repositories are a good indicator of what I'm digging into at the moment!</p>
                  <a href="https://github.com/lukevandekieft" target="_blank" rel="noopener noreferrer" className="special">See Project List</a>
                </div>
              </div>
						</section>

				</section>

				<section id="footer">
					<div className="inner centered">
						<h2 className="special">About Me</h2>
            <p className="footerParagraph">Accountant-turned-programmer who loves logic puzzles like board games, RPGs, and components that won't render. PNW native who travels when he can and spends his time reading, cooking, and gaming when he can't.</p>
            <h3 className="footerParagraph">I'd love to hear from you! Reach me at:</h3>

            <ul className="icons">
  						<li><a href="mailto:vandekie@gmail.com" target="_blank" rel="noopener noreferrer" className="icon fa-envelope"><span className="label">Email</span></a></li>
  						<li><a href="https://www.linkedin.com/in/lukevandekieft" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
  						<li><a href="https://github.com/lukevandekieft" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span></a></li>
  					</ul>

						<ul className="copyright">
							<li>&copy; Luke Vandekieft. All rights reserved.</li><li>Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a></li>
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
