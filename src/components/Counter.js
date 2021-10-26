import react from 'react'

class Counter extends react.Component {
  
  render () {
    console.log(" composant counter",this.props);
    return (
       
      <div className=" d-flex flex-column  ">
            <h2 className="text-center ">{this.props.count} </h2>
            <button  onClick={this.props.increment} type="button" className="btn btn-success">+</button>
            <button onClick={this.props.substract} type="button" className="btn btn-danger">-</button>
      </div>
      
    )
  }

}

export default Counter;