import React from 'react';
import classes from './Form.css';
import Compass from './Compass';

class Form extends React.Component{
  render() {
  return (
      <div  className={classes.Div}>
      <form onSubmit={this.props.loadWeather}>
        <input type="text" name="city" placeholder="Gdzie się jutro wybierasz?"   className={classes.Form}  />
        <button>Get Weather</button>
      
      
      </form>
      <Compass/>
    </div>
      


  )
}
}
export default Form;