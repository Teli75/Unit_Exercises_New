import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
/** Instead of outlet, import CSS, JS, HTML */

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        {/** Relative links inherit closest route which is courses, so you can omit /courses. The NavLinks guide us to the files */}
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    {/** Instead of outlet when using nested routes, descendant routes go here incl NotFound
     * "404" would be a relative path /courses/404 
     * <Route path="*" element={<Navigate replace to="/404" />} />
     * 
    */}
    <Outlet />
  </div>
);

export default Courses;