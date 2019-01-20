import React , {Component} from 'react';

import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';

import {reduxForm} from 'redux-form';

class BlogNew extends Component{
  state = {showFormReview : false};

  renderContent(){
    if(this.state.showFormReview){
      return (
        <BlogFormReview onCancel={() => this.setState({showFormReview : false})}/>
      );
    }

    return (
      <BlogForm
        onBlogSubmit = {() => this.setState({showFormReview : true})}
      />
    );
  }


  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );

  }
}


export default reduxForm({
  form : 'blogForm'
})(BlogNew);
