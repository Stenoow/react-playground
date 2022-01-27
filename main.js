

// -------------------------------------------
// Étape 1 => On modifie le composant input
// -------------------------------------------

/* class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }
 */

/*
function NameForm(props) {
    const [name, setName] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Le nom a été soumis: ${name}`);
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>
            Nom :
            <input type="text" value={name} onChange={handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}*/



// ReactDOM.render(<NameForm />, document.querySelector('#app'));






// -------------------------------------------
// Étape 2 => On modifie le composant textarea
// -------------------------------------------



/* class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Écrivez un essai à propos de votre élément du DOM préféré'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Un essai a été envoyé : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  } */
/*
function EssayForm(props) {
    const [text, setText] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Le texte a été soumis: ${text}`);
    }
      
    return(
        <form onSubmit={handleSubmit}>
          <label>
            Essay:
            <textarea rows={5} cols={35} value={text} onChange={handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>

      )


  }
*/


//   ReactDOM.render(<EssayForm />, document.querySelector('#app'));





// -------------------------------------------
// Étape 3 => On modifie le composant select
// -------------------------------------------

/* class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Votre parfum favori est : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Choisissez votre parfum favori :
            <select value={this.state.value} onChange={this.handleChange}>
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
  } */
/*
function FlavorForm(props) {
    const [value, setValue] = React.useState('coconut');
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`la valeur sélectionnée est: ${value}`);
    }

    return(
        <form onSubmit={handleSubmit}>
          <label>
            Choisissez votre parfum favori :
            <select value={value} onChange={handleChange}>
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
*/


//ReactDOM.render(<FlavorForm/>, document.querySelector('#app'));



/*
function MultiForm(props) {
    const [inputs, setInputs] = React.useState({
        name: '',
        text: '',
        value: "coconut"
    });

    // useCallback n'est pas forcément le meilleur choix ici

    
    const handleChange = React.useCallback(
        ({target: {name, value}}) => {
            setInputs(state => ({...state, [name]: value}), []);
            console.log(inputs);
        },
        [inputs]
    )

    const handleChange = ({target: {name, value}}) => {
        setInputs(state => ({...state, [name]: value}), []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for(const name in inputs) {
            console.log(`${name}: ${inputs[name]}`)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            </label>

            <label>
                Essay:
                <textarea name="text" value={inputs.text} onChange={handleChange} />
            </label>

            <label>
                Choisissez votre parfum favori :
                <select name="value" value={inputs.value} onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>

            <input type="submit" value="Envoyer" />
        </form>
    )
}*/

/*
function PokeApi(){
    const [pokeList, setPokeList] = React.useState({});
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(data => data.json())
            .then(resp => {
                setPokeList(resp.results)
                pokeCard();
            });
    }, [])

    const pokeCard = () => {

        let section = document.querySelector('#card');
        let search = document.querySelector('input').value;
        console.log(pokeList)
        if(pokeList.length > 0 && search === ''){
            section.innerHTML = '';
            for(let poke of pokeList){
                section.innerHTML += `<article><h1>${poke.name}</h1><img src="${getImages(poke.url)}" alt="image de ${poke.name}"></article>`;
            }
        }else if(search > 0){
            pokeSearch();
        }
    }

    const getImages = (url) => {
        let pokeId = url.replace( 'https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');

        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
    }

    const pokeSearch = () => {
        let search = document.querySelector('input').value;
        let section = document.querySelector('#card');

        if(search.length > 0){
            section.innerHTML = '';
            for(let poke of pokeList){
                if(poke.name.indexOf(search) !== -1){
                    section.innerHTML += `<article><h1>${poke.name}</h1><img src="${getImages(poke.url)}" alt="image de ${poke.name}"></article>`
                }
            }
        }else{
            section.innerHTML = '';
        }
    }

    return (
        <React.Fragment>
            <form>
                <input type="text" name="search" onChange={pokeSearch}/>
                <button onClick={pokeSearch}>clique pour une surprise</button>
            </form>
            <section id="card">

            </section>
        </React.Fragment>
    );
}*/

function App(){
    const [valueDec, setValueDec] = React.useState('');
    const [secondValue, setSecondValue] = React.useState('');
    const [selectValue, setSelectValue] = React.useState('bin');

    React.useEffect(() => {
        if(valueDec.length > 0){
            switch (selectValue) {
                case 'bin':
                    setSecondValue(parseInt(valueDec).toString(2));
                    break;
                case 'ter':
                    setSecondValue(parseInt(valueDec).toString(3));
                    break;
                case 'sep':
                    setSecondValue(parseInt(valueDec).toString(7));
                    break;
                case 'hex':
                    setSecondValue(parseInt(valueDec).toString(16));
                    break;
            }
        }

    }, [valueDec])

    React.useEffect(() => {
        if(secondValue.length > 0){
            switch (selectValue) {
                case 'bin':
                    setValueDec(parseInt(secondValue, 2));
                    break;
                case 'ter':
                    setValueDec(parseInt(secondValue, 3));
                    break;
                case 'sep':
                    setValueDec(parseInt(secondValue, 7));
                    break;
                case 'hex':
                    setValueDec(parseInt(secondValue, 16));
                    break;
            }
        }
    }, [secondValue])

    function handleChangeDec(e){
        e.preventDefault();
        setValueDec(e.target.value);
    }

    function handleChangeSecond(e){
        e.preventDefault();
        setSecondValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        e.target.remove();
        console.log(selectValue)
    }

    function handleChangeSelect(e){
        setSelectValue(e.target.value);
    }

    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <select name="value" value={selectValue} onChange={handleChangeSelect}>
                    <option value="bin">Décimal - Binaire</option>
                    <option value="ter">Décimal - Ternaire</option>
                    <option value="sep">Décimal - Septénaire</option>
                    <option value="hex">Décimal - Hexadécimal</option>
                </select>
                <button type="submit">changer</button>
            </form>
            <BaseNumberInput name="decimal" value={valueDec} handle={handleChangeDec} />
            <br />
            <BaseNumberInput name="setSecondValue" value={secondValue} handle={handleChangeSecond} />
        </React.Fragment>
    );
}

function BaseNumberInput(props){

    return <input type="text" name={props.name} value={props.value} onChange={props.handle}/>
}

ReactDOM.render(<App />, document.querySelector('#app'));