import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,Button,CardMenu,IconButton } from 'react-mdl';
import './projects.css'

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab:0 }

  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg) center/cover'}}>
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg) center/cover'}}>
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
        )
    } else if(this.state.activeTab === 1) {
       return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg) center/cover'}}>
              Javascript Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </CardText>
          </Card>
        </div>)
    } else {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center/cover'}}>
              Ruby Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </CardText>
          </Card>
        </div>)
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>Ruby / Ruby on Rails</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
