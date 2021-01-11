import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={ 6 }>
						<h2>Leonor Brigas</h2>
						<img
							src="https://avatars1.githubusercontent.com/u/63351704?v=4"
							alt="avatar"
							style={ { height: '250px' } }
							className="avatar"
						/>
						<p className="about-text">I’m currently looking for a job opportunity that allows me to grow and put my skills to the test.<br />I’m eager to learn new things and build real-life projects.<br /> I might not fulfil all the programming languages needs (yet), but I will work twice as hard to help your company succeed.</p>
					</Cell>
					<Cell col={ 6 }>
						<h2>Contact me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={ { fontSize: "25px", fontFamily: "Helvetica", color: "white" } }>
										<i class="fas fa-phone-square" />
										(351) 91 267 79 95
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={ { fontSize: "25px", fontFamily: "Helvetica", color: "white" } }>
										<i class="fa fa-envelope" />leonor.brigas@gmail.com
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
