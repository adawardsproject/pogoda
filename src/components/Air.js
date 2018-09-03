import React from 'react';
import Time from "./Date.js";
import AirForm from "./AirForm";
import TileCondition from "./TileCondition";
import TilePM10 from "./TilePM10";
import TilePM25 from "./TilePM25";
import TileSO2 from "./TileSO2";
import TileNO2 from "./TileNO2";
import TileCO2 from "./TileCO2";
import TileC6H6 from "./TileC6H6";
import TileO3 from "./TileO3";



var style = {
    fontWeight: "700",
    color: "#15629e",
    fontSize: '16px',
}
var paragraphStyle = {
    color: "#15629e",
    fontSize: '16px',
    fontWeight: "300",
}
var row = {
    display: "flex",
    marginTop: "10px",
    justifyContent:"space-between"
}

class Air extends React.Component {
    state = {
        stationName: undefined,
        cityName: undefined,
     

    }



//  e.preventDefault();
       // const stationId = e.target.elements.city.value;
      

    componentDidMount() {

      
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/52'
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
        return (
            <div className="">
                <p style={paragraphStyle}><span style={style}>Stan powietrza:</span> <Time /></p>
                <AirForm getAir={this.getAir} />
                
                         <div className="row d-flex" style={row}>
                                <TileCondition />

                        
                                <TilePM10 />

                       
                   
                                <TilePM25 />
                       
                       
                                <TileSO2 />
                            </div>
                            <div className="row d-flex" style={row}>

                                <TileNO2 />
                          
                                <TileCO2 />
                     
                    
                                <TileC6H6  />
                       
                    
                                <TileO3 />
                            </div>
                     





                  

            </div>
                    )
            
                }
            }
            
export default Air;