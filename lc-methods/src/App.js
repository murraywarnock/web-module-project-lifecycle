import React from 'react';
import axios from 'axios';
import UserCard from "./UserCard"

class App extends React.Component {
  state = {
      followers: [],
      user: {},
      name: 'murraywarnock'
  }

  componentDidMount() {
      console.log("componentDidMount state = ", this.state);
      this.getData();
  }

  getData = () => {
    axios.get(`https://api.github.com/users/${this.state.name}`)
    .then(resp=> {
        this.setState({
          user: resp.data
        });
        // 2nd axios call to get followers within .then of first call
        axios.get(`https://api.github.com/users/${this.state.name}/followers`)
        .then(resp=> {
            this.setState({
              followers: resp.data
            });
        })
        .catch(err => {
            console.log("Axios error: ", err);
        });
    })
    .catch(err => {
        console.log(err);
    });
  }

  seeFollowers = (id) => {
    console.log("seeFollowers called: id = ", id);
    this.setState({
      followers: [],
      user: {},
      name: id    
  })
  this.getData();
};

  render() {
      return(
      <div className="App">
        <h1>{`Github data for ${this.state.user.name}`}</h1>
        <div className="card">
          <img src={`${this.state.user.avatar_url}`} alt=""/>
          <div>{this.state.user.name}</div>
          <h2>Followers</h2>
        </div>
        <div className="follower-container">
          <UserCard followers={this.state.followers}
                    seeFollowers={this.seeFollowers}/>
        </div>
      </div>);
  }
}

export default App;