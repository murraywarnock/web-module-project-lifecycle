import React from 'react';

// const { user } = this.props;

class UserCard extends React.Component {

    // state = {
    //     followers: [],
    //     followers_url: followers_url
    // }

    componentDidMount() {
    
    }    
      componentDidUpdate() {
        console.log("UserCard: Component Updates");
      }
    
      render() {
            const { user } = this.props;

          console.log(`UserCard: Component Renders`);
          console.log("Usercard: ",user);
          return(
              <div>
                  <div>Name: {user.name}</div>
                  <div>Location: {user.location}</div>
                  <div>Login: {user.login}</div>
                  <div>URL: {user.html_url}</div>
                  <div>Followers: {user.followers}</div>
                  
           {/* <div key={pokemon.id} className="user-card">
             <img src={pokemon.img} alt={pokemon.name} />
             <div>
               <h3>{pokemon.name}</h3>
               {pokemon.next_evolution &&
                pokemon.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
            </div>
          </div> */}
        </div>
          );
      }
}

export default UserCard;
