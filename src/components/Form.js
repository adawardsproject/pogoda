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


class Form extends React.Component{

   handleClick() {
      this.props.getWeather
   
   }

  
  render() {
  return (
      <div  className={classes.Div}>
      <form onSubmit={this.handleClick}>
        <input type="text" name="city" placeholder="Gdzie się jutro wybierasz?"   className={classes.Form}  />
        <button style = {style}>Pobierz pogodę</button>
      
      
      </form>
      <Compass/>
    </div>
      


  )
}
}
export default Form;