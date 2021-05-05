import React from 'react';
import axios from 'axios';
import UserCard from "./UserCard"
import './styles.css';

class App extends React.Component {
  state = {
      followers: [],
      user: {},
      name: 'murraywarnock'
  }

  componentDidMount() {
      axios.get(`https://api.github.com/users/${this.state.name}`)
          .then(resp=> {
              this.setState({
                user: resp.data
              });
              axios.get(`https://api.github.com/users/${this.state.name}/followers`)
              .then(resp=> {
                // console.log(resp);
                  this.setState({
                    followers: resp.data
                  });
                  console.log("followers: ", this.state.followers);
              })
              .catch(err => {
                  console.log("Axios error: ", err);
              });
          })
          .catch(err => {
              console.log(err);
          });

  }

  render() {
      return(<div className="App">
          <h1>{`Github data for ${this.state.user.name}`}</h1>
          <div className="card">
          <div><img src={`${this.state.user.avatar_url}`} alt=""/></div>
          <div>{this.state.user.name}</div>
          </div>
          <h2>Followers</h2>
         <UserCard followers={this.state.followers}/>

      </div>);
  }
}

export default App;