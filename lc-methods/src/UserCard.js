import React from 'react';
import Follower from './Follower';

class UserCard extends React.Component {

  componentDidMount() {
  }  

  componentDidUpdate() {
    // console.log("UserCard: Component Updates");
  }
    
  render() {
      return(
        <>
        {this.props.followers.map(follower => (
          <div key={follower.name}>
            <Follower follower={follower} seeFollowers={this.props.seeFollowers}/>
          </div>
        ))}
      </>
      );
  }
}

export default UserCard;
