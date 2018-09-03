import React from 'react';

class Test extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        stationName: undefined,
        cityName: undefined,
     

    }

    };
  
  
  
  
        componentDidMount() {
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://api.gios.gov.pl/pjp-api/rest/station/findAll'
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
         .then(data => {
          console.log(data);
       
           
          })
          .catch(e => {
            console.log(e);
          
          });
          }
         
    render() {
        return <h1>Hi</h1>
      }
}
export default Test;