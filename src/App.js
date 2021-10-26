import react from 'react'
import Counter from './components/Counter'


class App extends react.Component {
  constructor(){
    super()
    this.state ={
      count : 0,
      counte : 0
    }
  }
  
  handlePlusClick = () =>{
    
    if(this.state.count === this.state.counte){
      this.setState({counte : this.state.counte +1})
    } else{
      this.setState({count : this.state.count +1})
    }
  }
  handleMoinClick = () =>{
    this.setState({count : this.state.count -1})
    if(this.state.count <= 0){
      this.setState({count : this.state.count })
    }
  }

  handlePlusClick2 = () =>{
    this.setState({counte : this.state.counte +1})
  }
  handleMoinClick2 = () =>{
    this.setState({counte : this.state.counte -1})
    if(this.state.counte <= 0){
      this.setState({counte : this.state.counte })
    } else if(this.state.counte === this.state.count ){
      this.setState({count : this.state.count -1})
    }
  }

  render () {
    console.log("composant app", this.props);
    return (
      <>
        <h1 className="text-center">counter</h1>
        
        <Counter substract = {this.handleMoinClick} increment = {this.handlePlusClick}  count = {this.state.count} />
        <Counter substract = {this.handleMoinClick2} increment = {this.handlePlusClick2}  count = {this.state.counte} />
      </>
    )
  }

}

export default App;
