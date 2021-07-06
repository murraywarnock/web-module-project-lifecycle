import React from 'react';
import "./styles.css"

class Follower extends React.Component {
  componentDidMount() {
    console.log(`Follower: Component Mounts`);
  }

  componentDidUpdate() {
    console.log("Follower: Component Updates");
  }

  render() {
      const { follower } = this.props;
      console.log(`Follower: Component Renders`, follower);
      return(
        <div className="follower">
          <div className="follower-content"><img src={`${follower.avatar_url}`} alt=""/>
            <p>{follower.login}</p>
          </div>
        </div>
    )};

}
export default Follower;