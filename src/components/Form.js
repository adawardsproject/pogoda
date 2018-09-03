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

class Form extends React.Component {

  onClick = e => {
 e.preventDefault();
    this.props.getWeather();
  
   
  }
    
  render() {
    return (
      <div className={classes.Div}>
        <form onSubmit={this.onClick}>
          <input type="text" name="city" placeholder="Gdzie się jutro wybierasz?" className={classes.Form} />
          <button style={style} type="submit">Pobierz pogodę</button>
        </form>
        <Compass />
      </div>
    )
  }
}
export default Form;