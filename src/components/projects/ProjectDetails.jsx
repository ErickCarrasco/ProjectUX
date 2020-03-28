import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { bindActionCreators } from 'redux'
import {addToCart} from '../../components/cartRedux/actions/cartActions'




const ProjectDetails = (props) => {

  const { auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  

  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <img src={project.imgURL}alt="No data" height="400" width="500"/>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Price: ${project.price} shipping: {project.shipping}</div>
            
          </div>
        </div>
        <div>
          <button onClick={()=>props.addToCart(project)}>Add to Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;

  return {
    project,
    auth: state.firebase.auth,
  };
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({
      addToCart
  }, dispatch);
}

export default compose(
  connect(mapStateToProps,mapActionsToProps),
  firestoreConnect([
    { collection: 'projects' },
  ]),
)(ProjectDetails);
