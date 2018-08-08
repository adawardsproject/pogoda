var React = require('react');
var FontAwesome = require('react-fontawesome');
 
class Compass extends React.Component {
  render ()  {
    return (
      <FontAwesome
        className='super-crazy-colors'
        name='compass'
        size='3x'

        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft:'20px', color:"white", marginBottom:'20px'}}
      />
    );
  }
};
export default Compass;