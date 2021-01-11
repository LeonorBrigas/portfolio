import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './aboutme.css'


class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h1><span style={{fontWeight: "bold"}}>Hi,</span><br/> My name is Leonor Brigas and<br/> I'm a <span className="fullstack" style={{fontWeight: "bold", background: "#458696"}}>Full Stack Web Developer.</span></h1>
          </Cell>
          <Cell col={6}>
          <p className="motivation">I’m <span style={{fontWeight: "bold"}}>creative, attentive to detail and a problem-solver.</span><br/>
          With my previous work experience at Mercer - a multinational investment company - I <span style={{fontWeight: "bold"}}>worked in a fast-paced environment, managing teams and improving processes.</span> <br/>
          I have always been <span style={{fontWeight: "bold"}}>very empathetic with those around me, contributing to a better work environment.</span><br/>
          I have spent a previous career meeting deadlines, managing team workload and improving processes at Mercer which required me to be <span style={{fontWeight: "bold"}}>well organized, to communicate effectively and manage priorities.</span><br/>
          In this capacity, I was required to read, write and speak in English on a daily basis, allowing me to master the language.<br/>
          I’m currently looking for a job opportunity that allows me to grow and put my skills to the test. I’m eager to learn new things and build real-life projects. <br/>
          I might not fulfil all the programming languages needs (yet), but I will work twice as hard to help your company succeed.<br/>
          I hope you will consider my application.<br/>
          Thank you for your time and attention.<br/>
          Kindest regards,<br/>
          Leonor Brigas</p>
          </Cell>
        </Grid>
      </div>


     )
  }
}

export default About;
