import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import './landingpage.css';


class Landing extends Component {
	render() {
		return (
			<div style={ { width: '100%', margin: 'auto' } }>
				<Grid className="landing-grid">
					<Cell col={ 12 }>
						<div className="image-container">
							<img
								src="https://avatars1.githubusercontent.com/u/63351704?v=4"
								avatar="avatar"
								className="avatar-img"
								alt="avatar"
							/>
						</div>
						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>

							<hr />
							<p>HTML/CSS | Bootstrap | Javascript | React | Ruby on Rails | Github</p>
							<div className="social-links">
								{ /* Linkedin */ }
								<a href="https://www.linkedin.com/in/leonor-brigas/" target="_blank" rel="noreferrer">
									<i className="fab fa-linkedin"></i>
								</a>
								{ /* Github */ }
								<a href="https://github.com/LeonorBrigas" target="_blank" rel="noreferrer">
									<i className="fab fa-github-square"></i>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
