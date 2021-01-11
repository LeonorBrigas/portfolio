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
						{ this.props.companyName } <br /> { this.props.jobTitle }
					</h4>
					<p style={ { marginBottom: "4px" } }>{ this.props.jobDescription1 }</p>
					<p style={ { marginBottom: "4px" } }>{ this.props.jobDescription2 }</p>
					<p style={ { marginBottom: "4px" } }>{ this.props.jobDescription3 }</p>
				</Cell>
			</Grid>
		);
	}
}

export default Education;
