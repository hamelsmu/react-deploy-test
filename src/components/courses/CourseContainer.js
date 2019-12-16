import React from 'react';
import Course from './Course';

const CourseContainer = (props) => {
  let courses = props.data.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  }); 
  return (
    <div>
      <ul>
        {courses}    
      </ul>
    </div>
  );
}

export default CourseContainer;