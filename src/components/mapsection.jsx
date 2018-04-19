import React from 'react';
import Map from './map.jsx'

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


class MapSection extends React.Component {
    state = {
        voivode: 'calaPolska'
    }

    clickHandleMap = (value) => {
        console.log('jestem w map section');
        console.log(value);
        this.setState({
            voivode: value
        })


    }

    render() {

        return (
            <div>
                <button>
                    <Link to={{ pathname: '/search', state: { voivode: 'calaPolska'} }}  style={{textDecoration: 'none', color: 'black', fontSize: '40px'}}>
                        Wyszukaj trasy w całej Polsce
                    </Link>
                </button>
                <Map clickHandle = {this.clickHandleMap}/>
                    <Link  to={{ pathname: '/search', state: { voivode: this.state.voivode} }} style={{textDecoration: 'none', color: 'black', fontSize: '40px'}}>
                        Wyszukaj trasy w zaznaczonym województwie
                    </Link>



            </div>
        )
    }
}


export default MapSection;
