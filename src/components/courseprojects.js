import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class CourseProjects extends Component {
	render() {
		return (
			<Grid>
				<Cell col={ 3 }>
					{ this.props.name }
				</Cell>
				<Cell col={ 9 }>
					{ this.props.description }
				</Cell>
			</Grid>
		);
	}
}

export default CourseProjects;
