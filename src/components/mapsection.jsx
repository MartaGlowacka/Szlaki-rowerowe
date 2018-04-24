import React from 'react';
import Map from './map.jsx'

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


class MapSection extends React.Component {
    // state = {
    //     voivodeship: 'calaPolska'
    // }
    //
    // clickHandleMap = (value) => {
    //     console.log('jestem w map section');
    //     console.log(value);
    //     this.setState({
    //         voivodeship: value
    //     })
    //
    //
    // }

    render() {

        return (
            <div className={'wrapper mapa'}>

                <button>
                    <Link to={{ pathname: '/search', state: { voivodeship: 'calaPolska'} }}>
                        Wyszukaj trasy rowerowe w całej Polsce
                    </Link>
                </button>
                <h4>lub kliknij na mapie jeśli szukasz tras w konkretnym województwie</h4>
                <div className={' mapSection'}>
                <div className={'mapDescription'}>
                    <h3>SZUKASZ TRASY ROWEROWEJ?</h3>

                    <h5>Trafiłeś w idealne miejsce</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate dolor doloribus eum exercitationem, hic illo inventore iste magnam modi quod quos tempora voluptatem voluptatibus. Ad expedita iure repudiandae!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate dolor doloribus eum exercitationem, hic illo inventore iste magnam modi quod quos tempora voluptatem voluptatibus. Ad expedita iure repudiandae!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate dolor doloribus eum exercitationem, hic illo inventore iste magnam modi quod quos tempora voluptatem voluptatibus. Ad expedita iure repudiandae!</p>
                {/*<button>*/}
                    {/*<Link to={{ pathname: '/search', state: { voivodeship: this.state.voivodeship} }} style={{textDecoration: 'none', color: 'black', fontSize: '40px'}}>*/}
                    {/*i wyszukaj trasy w zaznaczonym województwie*/}
                    {/*</Link>*/}
                {/*</button>*/}
                </div>

                <Map clickHandle = {this.clickHandleMap}/>
                </div>



            </div>
        )
    }
}


export default MapSection;
