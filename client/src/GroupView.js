import React from 'react';
import './styles/Home.css';
import Header from './components/Header'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class GroupView extends React.Component {
  render() {
    return (
      <div id="Page">
      <head>

      </head>
      <body>
        <div className="Home">
          <Header/>
        </div>
        <div className="mainContent">

        { 
          // Main element to hold timeline
        }
        <VerticalTimeline>

        { 
          // Title for the family 
        }
        <h1> Anderson Family </h1> 


        { 
          // This is the element I want to dynamically create and fill in with parameters
        }

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={null}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        

      </VerticalTimeline>
        
        </div>
      </body>

    </div>

      

    )
  }
}