function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }
  
function GuestGreeting(props) {
return <h1>Veuillez vous connecter</h1>;
}

function UserGet(){

}

function Greeting(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [listItems, setListItems] = React.useState(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(resp => resp.json()).then((data) => {
          setListItems(data.map((user) =>
              <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
              </tr>
          ));
      })});

  const handleLogIn = (e) => {
      e.preventDefault();
      setIsLoggedIn(true);
  }

  const listUsers = () => {
      return <table>
          <thead>
              <tr>
                  <th>Nom</th>
                  <th>Téléphone</th>
                  <th>Email</th>
                  <th>Site Web</th>
                  <th>Nom de la compagnie</th>
              </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
      </table>;
  };

  const handleLogOut = (e) => {
      e.preventDefault();
      setIsLoggedIn(false);
  }

  return(
    <React.Fragment>
        {isLoggedIn ?
        <React.Fragment>
            <UserGreeting />
            <button onClick={handleLogOut}>Se déconnecter</button>
        </React.Fragment> :
        <React.Fragment>
            <GuestGreeting />
            <button onClick={handleLogIn}>Se connecter</button>
        </React.Fragment> }
        {listUsers()}
    </React.Fragment>
  )
}
  
ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
);