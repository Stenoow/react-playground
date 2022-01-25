function App(props) {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);



    return(
        <React.Fragment>
        {
            users.map((u) =>(
                <UserCard key={u.id} user={u}/>
            ))
        }
        </React.Fragment>
    )
}

function UserCard({user}) {
    

    return (
        <ul className="user-card">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

function NameForm(props) {

    const [state, setState] = React.useState({value: '', fruitz: 'coconut', textArea: 'Écrivez un essai à propos de votre élément du DOM préféré'});

    const handleChange = (event)=> {
        switch (event.target.name){
            case 'value':
                setState({value: event.target.value, fruitz: state.fruitz, textArea: state.textArea});
                console.log(event.target.name)
                break;
            case 'textArea':
                setState({textArea: event.target.value, value: state.value, fruitz: state.fruitz});
                console.log(event.target.name)
                break;
            case 'fruitz':
                setState({fruitz: event.target.value, value: state.value, textArea: state.textArea});
                console.log(event.target.name)
                break;
        }

    }

    const handleSubmit = (event) => {
        console.log(state)
        alert('Le nom a été soumis : ' + state.value + ' / Le fruit préféré est : ' + state.fruitz + ' / Le textArea contient : ' + state.textArea);
        event.preventDefault();
    }

    return (
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input type="text" value={state.value} name="value" onChange={handleChange} />
                </label>
                <label>
                    Essay:
                    <textarea value={state.textArea} name="textArea" onChange={handleChange} />
                </label>
                <label>
                    Choisissez votre parfum favori :
                    <select value={state.fruitz} name="fruitz" onChange={handleChange}>
                        <option value="grapefruit">Pamplemousse</option>
                        <option value="lime">Citron vert</option>
                        <option value="coconut">Noix de coco</option>
                        <option value="mango">Mangue</option>
                    </select>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
}

ReactDOM.render(<NameForm />, document.querySelector('#app'))