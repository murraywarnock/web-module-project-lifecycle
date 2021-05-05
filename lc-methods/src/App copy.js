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
      axios.get(`https://api.github.com/users/${this.state.name}`)
          .then(resp=> {
            console.log(resp);
              this.setState({
                user: resp.data
              });
              console.log(this.state.ghUserCard.followers_url);
          })
          .catch(err => {
              console.log(err);
          });
  }

  //1. Add in state for breed.
  //2. Add in onChange to collect breed from user
  //3. Add in onSubmit
  //4. Run axios call in onSubmit to get breed's images
  //5. Add in images to state.

  componentDidUpdate(prevProps, prevState) {
      console.log("change of any kind");
      // if (prevState.dogImages !== this.state.dogImages) {
      //     if (this.state.breed === 'chihuahua') {
      //         axios.get('https://dog.ceo/api/breed/husky/images')
      //             .then(resp=> {
      //                 this.setState({
      //                     dogImages: resp.data.message,
      //                     breed: "husky"
      //                 });
      //             })
      //             .catch(err => {
      //                 console.log(err);
      //             });
      //     }
      // }
  }

  handleFormChange = (e)=>{
      this.setState({
          ghName: e.target.value
      });
  }

  handleFormSubmit = (e) => {
      e.preventDefault();
      // axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
      //     .then(resp=> {
      //         this.setState({
      //             dogImages: resp.data.message
      //         })
      //     })
      //     .catch(err=>{
      //         console.log(err);
      //     });
  }

  render() {
      return(<div className="App">
          <h1>{`Github data for ${this.state.user.name}`}</h1>
          <div><img src={`${this.state.user.avatar_url}`} alt=""/></div>
          <div>{this.state.user.name}</div>

          {/* <form onSubmit={this.handleFormSubmit}>
              <input value={this.state.ghName} onChange={this.handleFormChange}/>
              <button>Find User</button>
          </form> */}
          <UserCard user={this.state.user}/>
          {/* <button>Show Followers</button> */}


          {/* <form onSubmit={this.handleFormSubmit}>
              <input value={this.state.breed} onChange={this.handleFormChange}/>
              <button>Github Friends</button>
          </form>

          <div className="doggos">
              {
                  this.state.dogImages.map(image=> {
                      return <img key={image} width='200' src={image} alt={image}/>
                  })
              }
          </div> */}
      </div>);
  }
}

export default App;