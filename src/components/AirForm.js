import React from 'react';
import classes from './Form.css';
import Compass from './Compass';

var style = {
  backgroundColor: "#ffc43c",
  color: "#176bac",
  border: "none",
  height: "39px",
  width: "192px",
  fontSize: "16px",
  fontWeight: "400",


}


class AirForm extends React.Component{
  render() {
  return (
      <div  className={classes.Div}>
      <form onSubmit={this.props.getAir}>
        <input type="text" name="city" placeholder="Gdzie się jutro wybierasz?"   className={classes.Form}  />
        <button style = {style}>Pobierz stan powietrza</button>
      
      
      </form>
      <Compass/>
    </div>
      


  )
}
}
export default AirForm;