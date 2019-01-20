import  _ from 'lodash';
import React , { Component } from 'react';
import { reduxForm , Field } from 'redux-form';
import {Link} from 'react-router-dom';
import formFields from './formFields';
import BlogField from './BlogField';


class BlogForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={BlogField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}>
          {this.renderFields()}
          <Link to="/blogs" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>

        </form>
      </div>
    );
  }
}


export default reduxForm({
  form : 'blogForm',
  destroyOnUnmount : false
})(BlogForm);
