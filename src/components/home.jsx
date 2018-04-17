import React from 'react';

import Map from './map.jsx'

class Home extends React.Component {
    render() {
        return (
            <div className='lower'>
                <div className="wrapper red">
                    Jestem Home

                    <Map />
                </div>

            </div>
        )
    }
}



export default Home;
