import React from 'react';
import Map from './map.jsx'

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


class MapSection extends React.Component {
    state = {
        voivodeship: 'calaPolska'
    }

    clickHandleMap = (value) => {
        console.log('jestem w map section');
        console.log(value);
        this.setState({
            voivodeship: value
        })


    }

    render() {

        return (
            <div>
                <button>
                    <Link to={{ pathname: '/search', state: { voivodeship: 'calaPolska'} }} style={{textDecoration: 'none', color: 'black', fontSize: '40px'}}>
                        Wyszukaj trasy w całej Polsce
                    </Link>
                </button>
                <Map clickHandle = {this.clickHandleMap}/>
                    <Link to={{ pathname: '/search', state: { voivodeship: this.state.voivodeship} }} style={{textDecoration: 'none', color: 'black', fontSize: '40px'}}>
                        Wyszukaj trasy w zaznaczonym województwie
                    </Link>



            </div>
        )
    }
}


export default MapSection;
