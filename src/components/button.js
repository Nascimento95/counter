import react from 'react'

class Button extends react.Component {
  
  render () {
      console.log(" mes props de Button",this.props);
    return (
      <>
        <button type="button" className="btn btn-success">+</button>
        <button type="button" className="btn btn-danger">-</button>
      </>
    )
  }

}

export default Button;