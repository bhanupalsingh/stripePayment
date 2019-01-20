import _ from 'lodash';
import React , {Component} from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

const BlogFormReview = ({onCancel,formValues,submitBlog,history}) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
    <h5>Please confirm your entries</h5>
    {reviewFields}
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => submitBlog(formValues, history)}
          className="green btn-flat right white-text"
        >
        Post Blog
        <i className="material-icons right">cloud_upload</i>
      </button>
    </div>
  );
}

function mapStateToProps(state){
  return { formValues : state.form.blogForm.values }
}

export default connect(mapStateToProps,actions)(withRouter(BlogFormReview));
