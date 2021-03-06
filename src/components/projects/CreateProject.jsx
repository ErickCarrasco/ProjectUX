import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import createProject from '../../store/actions/projectActions';


class CreateProject extends Component {
    constructor(props){
      super(props);
    this.state={
      title: '',
      content: '',
      imgURL:'',
      price:'',
      shipping:''
    }
    this.handleChange=this.handleChange.bind(this);
  }
 
  

  handleChange = (e) => {
    const { target } = e;

    this.setState(state => ({
      ...state,
      [target.id]: target.value,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { props, state } = this;
    props.createProject(state);

    props.history.push('/');
  }

  render() {

    const { auth } = this.props;
    console.log(auth.uid);
    if (!auth.uid ) {
      return <Redirect to="/signin" />;
    }

    if(auth.uid!=="iD6DlJzatCNDsP4U6Wo2Iq1qoW43"){
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new product</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Product Content</label>
            <textarea name="content" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title">IMG URL</label>
            <input type="text" name="title" id="imgURL" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title">Price</label>
            <input type="text" name="title" id="price" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title">Shipping</label>
            <input type="text" name="title" id="shipping" onChange={this.handleChange} />
          </div>
          
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
