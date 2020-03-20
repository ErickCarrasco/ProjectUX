import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component{
    render(){
        const { products }=this.props;
        return(
            <div className="dashboard-container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList products={products}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const products = state.firestoreConnect.ordered.products
    return {
      products 
    }
  }
  
  export default compose(connect(mapStateToProps),firestoreConnect([{ collection: 'products' }]))(Dashboard)

