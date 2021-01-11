import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import CourseProjects from './courseprojects';
import Education from './education';
import Experience from './experience';
import RelevantExperience from './relevantexperience';
import './resume.css';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={ 4 }>
						<div style={ { textAlign: "center" } }>
							<img
								src="https://avatars1.githubusercontent.com/u/63351704?v=4"
								avatar="avatar"
								className="avatar-img"
								alt="avatar"
							/>
						</div>
						<h2 style={ { paddingTop: "3px" } }>Leonor Brigas</h2>
						<div className="subtitle">
							<div className="social-links-resume">
								<h4 style={ { color: "grey" } }> Web Developer</h4>
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
						<hr style={ { borderTop: "3px solid #417A8A" } } />
						<p>I’m currently looking for a job opportunity that allows me to grow and put my skills to the test. I’m eager to learn new things and build real-life projects. I might not fulfil all the programming languages needs (yet), but I will work twice as hard to help your company succeed.</p>
						<hr style={ { borderTop: "3px solid #417A8A" } } />
						<div style={ { display: "flex" } }>
							<i class="material-icons">
								location_on
							</i>
							<p style={ { marginLeft: "20px" } }> Luxembourg</p>
						</div>
						<div style={ { display: "flex" } }>
							<i class="material-icons">
								call
							</i>
							<p style={ { marginLeft: "20px" } }> (351) 91 267 79 95</p>
						</div>
						<div style={ { display: "flex" } }>
							<i class="material-icons">
								email
							</i>
							<p style={ { marginLeft: "20px" } }>leonor.brigas@gmail.com</p>
						</div>
						<hr style={ { borderTop: "3px solid #417A8A" } } />
					</Cell>
					<Cell col={ 8 } className="resume-right-col">
						<h2>Relevant Experience</h2>
						<RelevantExperience
							startYear="Jul 2020"
							endYear="Sept 2020"
							schoolName="Le Wagon"
							schoolCourse="Web Development"
							schoolDescription="An on-site, 9 week, 10 hours a day, coding bootcamp. Skills gained during the course: Ruby, Rails, OOP, MVC architecture, SQL, HTML, CSS/SCSS, Bootstrap, JavaScript, jQuery, AJAX, GitHub, Heroku."
						/>
						<hr style={ { borderTop: "1px solid white" } } />
						<h2>Web Development Projects</h2>
						<CourseProjects
							name="DannyDeveto"
							description="Web application that makes it easy and quick to choose a movie / serie to watch, where users can create groups within the app itself and it links directly with Netflix. Mainly built with Ruby on Rails, SQL, HTML, CSS/SCSS, Bootstrap, JavaScript, GitHub (http://www.deve.to/)"
						/>
						<CourseProjects
							name="Bill Kill"
							description="Through the challenge of cloning an AirBnb project, within a group of 4 students we created web application to hire hitman's anywhere in the world. Mainly built with Ruby on Rails, SQL, HTML, CSS, Bootstrap, JavaScript. During this project learned how to use GitHub and work as one team."
						/>
						<CourseProjects
							name="Mister Cocktail"
							description="Website to store, edit and show your cocktail recipes. Built with Ruby on Rails, SQL, HTML, CSS, Bootstrap."
						/>
						<CourseProjects
							name="Food Delivery"
							description="Two users terminal app to store/list/delete food orders and mark them as completed. Built with Ruby using MVC model."
						/>
						<CourseProjects
							name="Cookbook"
							description="Terminal app to store, list and delete recipes. Built with Ruby using MVC model."
						/>

						<hr style={ { borderTop: "1px solid white" } } />
						<h2>Education</h2>
						<Education
							startYear="Sept 2014"
							endYear="Jan 2016"
							schoolName="Nova School of Business & Economics"
							schoolCourse="Master in Management"
						/>
						<Education
							startYear="Sept 2010"
							endYear="Jan 2014"
							schoolName="Nova School of Business & Economics"
							schoolCourse="Bachelor in Management"
						/>
						<hr style={ { borderTop: "1px solid white" } } />
						<h2>Employment History</h2>
						<Experience
							startYear="Mar 2016"
							endYear="Nov 2020"
							companyName="Mercer Portugal"
							jobTitle="Investment Analyst"
							jobDescription1="• Analyses pension fund performance and allocation across asset classes, investment managers and investment strategies for several Ireland-based clients"
							jobDescription2="• Develops quarterly reports to be used in client meetings with trustees"
							jobDescription3="• Member of the Branding Team responsible for quarterly internal newsletters"
						/>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
