import React from 'react';
//import {Route} from 'react-router-dom';

import {getData, logOut} from '../actions'
import {connect} from 'react-redux';

class Users extends React.Component {
  

   componentDidMount() {
       
        this.props.getData()
        
      
   }

   logout = e => {
    e.preventDefault();
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('department')
    
    this.props.logOut()
    this.props.history.push('/')
   

   }
    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.username}</h1>
                <p>You are signed in as a {this.props.user.department}</p>
                <div>
                {this.props.users.map(user =>
                    <h1>{user.username}</h1>)}
                </div>
                <button className="register" onClick={this.logout}>Logout</button>
            </div>
          
           
        )
    }
    
}

const mapStateToProps = (state) => ({
    credentials: state.credentials,
    users: state.users,
    user: state.user
})

export default connect(mapStateToProps,{getData, logOut})(Users)