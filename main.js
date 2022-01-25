/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), color: 'red'};
        this.colorRandom = () =>{
            const colors = ['blue', 'red', 'yellow', 'green', 'black', 'orange'];
            this.setState({
                color: colors[Math.floor(Math.random()* (colors.length + 1))]
            })
        }
        this.colorDefault = () =>{
            this.setState({
                color: 'black'
            })
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2 style={{color: this.state.color}}>Il est {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.colorRandom}>
                    Couleur aléatoire
                </button>
                <button onClick={this.colorDefault}>
                    Remettre en noir
                </button>
            </div>
        );
    }
}
/*
function Clock(props) {
    React.useEffect(() => {
        tick();
    }, []);

    const [date, setDate] = React.useState(new Date());
    const [color, setColor] = React.useState('red');

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }


    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={color: color}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={ColorRandom}>
                Couleur aléatoire
            </button>
            <button onClick={ColorDefault}>
                Remettre en noir
            </button>
        </div>
        );
}

function colorRandom()
{
    this.setColor('blue');
}*/

ReactDOM.render(<Clock />, document.querySelector('#app'));





