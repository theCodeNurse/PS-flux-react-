import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

const CourseForm = (props) => {
  return (
    <form onSubmit = {props.onSubmit}>
          <TextInput
            id="title"
            label="Title"
            onChange={props.onChange} 
            name="title"
            value={props.course.title}
            error={props.error.title}
          />
     
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.error.authorId && (
          <div className = "alert alert-danger">{props.error.authorId}</div>
        )}
      </div>

          <TextInput
            id="category"
            label = "Category"
            name="category"
            onChange={props.onChange}
            value={props.course.category}
            error={props.error.category}
          />
  
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,

};

export default CourseForm;
