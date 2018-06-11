import React from 'react';
import Info1 from '../../assets/3a1.png';
import Info2 from '../../assets/3a2.jpg';
import Info3 from '../../assets/3a3.jpg';
import './_three-across.scss';



export default class ThreeAcross extends React.Component {
    render() {
      return(
       <div className="container-three-across">   
        <div className="narrow">
          <p className='infoheading'>Teams</p>
          <div className='box'>
            <div className='boximg'>
              <img className='infoimg' src={Info1}/>
            <p>Traceability one step back, one step up what, where and when disparate methods</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={Info2}/>
           <p>Transparency entire, interconnected view what, where and when how it’s produced other attributes</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={Info3}/>
            <p>Blockchain is a technology where distributed servers compute the authenticity of transactions in a decentralized manner.</p>
            </div>
          </div>
        </div>

        <div className="wide">
          <p className='infoheading'>Teams</p>
          <div className='box'>
            <div className='boximg'>
            <img className='infoimg' src={Info1}/>
            <p>Traceability one step back, one step up what, where and when disparate methods</p>
            </div>
            <div className='boximg'>
            <img className='infoimg' src={Info2}/>
            <div className='boxtext'><p>Transparency entire, interconnected view what, where and when how it’s produced other attributes</p></div>
            </div>
            <div className='boximg'>
            <img className='infoimg' src={Info3}/>
            <div className='boxtext'><p>Blockchain is a technology where distributed servers compute the authenticity of transactions in a decentralized manner. Complex mathematical functions create secure and definitive records of who owns what, when.</p></div>
            </div>
          </div>
        </div>

        
        </div>
      );
    }
  }