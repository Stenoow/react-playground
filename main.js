//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'Jérémie';
const lastName = 'Bomont';


// Solution sans bonus

class Hello extends React.Component
{
    constructor(props) {
        super(props);
    }
    render(){
        return <h1>Hello <span>{this.props.first[0].toUpperCase() + this.props.first.substr(1)}</span> <span className="red-text">{this.props.last.toUpperCase()}</span></h1>
    }
}

function HelloWorld(props)
{
    return <h1>Hello <span>{props.first[0].toUpperCase() + props.first.substr(1)}</span> <span className="red-text">{props.last.toUpperCase()}</span></h1>
    ;
}

ReactDOM.render(<Hello first={firstName} last={lastName} />, document.querySelector('#app'));