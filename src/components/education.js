import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Education extends Component {
	render() {
		return (
			<Grid>
				<Cell col={ 3 }>
					<p>{ this.props.startYear } - { this.props.endYear }</p>
				</Cell>
				<Cell col={ 9 }>
					<h4 style={ { marginTop: "0px" } }>
						{ this.props.schoolName } <br /> { this.props.schoolCourse }
					</h4>
					<p style={ { marginBottom: "-10px" } }>{ this.props.schoolDescription }</p>
				</Cell>
			</Grid>
		);
	}
}

export default Education;
