import React from 'react';

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
        <>
        <div><img src={`${follower.avatar_url}`} alt=""/></div>
        <div>{follower.login}</div>
        </>
    )};

}
export default Follower;