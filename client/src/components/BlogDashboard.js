import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blogs/BlogList';
//import SurveyList from './surveys/SurveyList';

const BlogDashboard = () => {
  return (
    <div>
      <BlogList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
        <Link to="/blogs/new" className="btn-floating btn-large blue">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default BlogDashboard;
