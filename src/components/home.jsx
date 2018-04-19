import React from 'react';

import MapSection from './mapsection.jsx'
import Slider from './slider.jsx'

class Home extends React.Component {
    render() {
        return (
            <div className='lower'>
                <div className="wrapper red">
                    <Slider />
                    <MapSection />

                </div>

            </div>
        )
    }
}



export default Home;
