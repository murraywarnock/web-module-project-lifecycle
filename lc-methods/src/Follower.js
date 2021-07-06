import React from 'react';
import "./styles.css"

class Follower extends React.Component {
  componentDidMount() {
    // console.log(`Follower: Component Mounts`);
  }

  componentDidUpdate() {
    // console.log("Follower: Component Updates");
  }

  render() {
      const { follower, seeFollowers } = this.props;
      return(
        <div key={follower.login} className="follower">
          <div className="follower-content"><img src={`${follower.avatar_url}`} alt=""/>
            <p>{follower.login}</p>
            <div className="see-followers" onClick={()=>{seeFollowers(follower.login)}}>
              SEE FOLLOWERS
            </div>
          </div>
        </div>
    )};

}
export default Follower;