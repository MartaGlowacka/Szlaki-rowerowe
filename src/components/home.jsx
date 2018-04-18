import React from 'react';

import Map from './map.jsx'
import Slider from './slider.jsx'

class Home extends React.Component {
    render() {
        return (
            <div className='lower'>
                <div className="wrapper red">
                    Jestem Home

                    <Map />
                    <Slider />
                </div>

            </div>
        )
    }
}



export default Home;
