import React from "react";
import {Route, Routes, Navigate } from 'react-router-dom'
import { HTMLCourses, CSSCourses, JSCourses} from './data/courses';

//App Components
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import CourseContainer from './components/courses/CourseContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="container">
      <Header />
      {/** Selects the route who's path property best matches the url and loads the corresponding comp */}
      <Routes>
      <Route path="about" element={<About />}/>
        {/* Path: indicates the url to match | element: specifies which component to render  */}
      <Route path="/" element={<Home />}/>
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/courses" element={<Courses />}>
          {/** If you don't pass a val to prop it will use bool-true */}
          <Route index element={<Navigate replace to="/courses/html"/>} />
{/**When HTML route renders CourseCont, the CourseCont needs to receive data from HTMLCourses arr */}
          <Route path="html" element={<CourseContainer data={HTMLCourses} />}/>
          <Route path="css" element={<CourseContainer data={CSSCourses} />}/>
          <Route path="javascript" element={<CourseContainer data= {JSCourses}/>}/>
      </Route> 
{/** This route should match with any url, but will only render when none of the other routes match the url */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
