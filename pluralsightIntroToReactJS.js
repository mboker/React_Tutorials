class Button extends React.Component {
	constructor(props){
  	super(props);
    this.state = {
    	counter: 0
    };
  }
  
  handleClick = () => {
    this.props.onClickFunction(this.props.onClickParam);
  };
  
	render(){
  	return(
			<button onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div>Result: {props.counter}</div>
  );
}

class App extends React.Component {
	//BABL translates the following line to the constructor on button
  state = { counter: 0 };

	incCounter = (incValue) => {
  	if (incValue == null || incValue == NaN){
    	incValue = 1;
    }
  	this.setState((prevState) => ({
    	counter: prevState.counter + incValue
    }));
  }
	render() {
  	return (
    	<div>
        <Button label="+3" onClickFunction={this.incCounter} onClickParam={3}/>
        <Button label="+5" onClickFunction={this.incCounter} onClickParam={5}/>
        <Button label="+1" onClickFunction={this.incCounter}/>        
        <Result counter={this.state.counter}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
