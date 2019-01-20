import React , {Component} from 'react';
import {fetchBlogs} from '../../actions';
import { connect } from 'react-redux';


class BlogList extends Component{

  componentDidMount(){
    this.props.fetchBlogs();
  }


  renderBlogs(){
    return this.props.blogs.reverse().map(blog => {
      return (
        <div className="card darken-1" key={blog._id}>
          <div className="card-content">
            <span className="card-title">{blog.title}</span>
            <p>
              {blog.body}
            </p>
            <p className="right">
              Sent On: {new Date(blog.dateSent).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        {this.renderBlogs()}
      </div>
    );
  }
}


function mapStateToProps({blogs}){
  return { blogs };
}

export default connect(mapStateToProps,{fetchBlogs})(BlogList);
