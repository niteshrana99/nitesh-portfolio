import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Brands = () => {
  return (
    <div className="brands">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="Feb 2021 - present"
          dateClassName="vertical-timeline-element--date"
          iconClassName="jobIcon"
          iconStyle={{ background: '#bcf48b', color: 'white' }}
        >
          <h1 className="vertical-timeline-element-title vertical-timeline-company-name">Senior Frondtend Developer, @Preqin</h1>
          <h4 className="vertical-timeline-element-subtitle vertical-timeline-company-location">Bengaluru, IN</h4>
          <p>
            Sprint Planning and Effort Estimation | Reactjs | Jest, Enzyme | Jira | GIT
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="June 2019 - Feb 2021"
          dateClassName="vertical-timeline-element--date"
          iconStyle={{ background: '#bcf48b', color: 'white' }}
          iconClassName="jobIcon"
        >
          <h1 className="vertical-timeline-element-title vertical-timeline-company-name">Software Developer II, @Oracle</h1>
          <h4 className="vertical-timeline-element-subtitle vertical-timeline-company-location">Bengaluru, IN</h4>
          <p>
            Reactjs | Oracle Financial Analysis Product Development | Hierarcy Browser | Lineage UI
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="March 2018-2019"
          dateClassName="vertical-timeline-element--date"
          iconStyle={{ background: '#bcf48b', color: 'white' }}
          iconClassName="jobIcon"
        >
          <h1 className="vertical-timeline-element-title vertical-timeline-company-name">Senior Software Engineer, @Mindtree</h1>
          <h4 className="vertical-timeline-element-subtitle vertical-timeline-company-location">Bengaluru, IN</h4>
          <p>
            Reactjs | Angular 2.0 | Franklin Templaton Web portal Development
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="June 2016- March 2018"
          dateClassName="vertical-timeline-element--date"
          iconStyle={{ background: '#bcf48b', color: 'white' }}
          iconClassName="jobIcon"
        >
          <h1 className="vertical-timeline-element-title vertical-timeline-company-name">Software Engineer, @Mindtree</h1>
          <h4 className="vertical-timeline-element-subtitle vertical-timeline-company-location">Pune, IN</h4>
          <p>
          Reactjs | Angular 2.0 | Sterling National Bank | SITA world Tracer
    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="June 2012- July 2016"
          dateClassName="vertical-timeline-element--date"
          iconStyle={{ background: '#bcf48b', color: 'white' }}
          iconClassName="studyIcon"
        >
          <h1 className="vertical-timeline-element-title vertical-timeline-company-name">Education</h1>
          <h4 className="vertical-timeline-element-subtitle vertical-timeline-company-location">B.E @Chandigarh University</h4>
          <p>
            Coding | Electronics
    </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Brands
