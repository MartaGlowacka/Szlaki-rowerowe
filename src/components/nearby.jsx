import React from 'react';
import SingleRandomRoute from './singleRandomRoute.jsx'

class Nearby extends React.Component {

    state = {
        text: this.props.text,
        show: 'block',

    }

    handleCLick = () => {
        window.scrollTo(0, 1000)
    }



    render () {

        const opis_trasy = {
            listStyle: 'none',
            display: this.state.show,
        }


        const rozwin = {
            
            cursor: 'pointer',

        }

        return (
            <div className="main_nearby">
            <h1 className="rozwin" onClick={this.handleCLick}>{this.props.text}</h1>
                <hr/>
                <br/>
                <br/>
                {/* <img src="../images/bike.jpg" /> */}

                <ul className="random_route_list" style={opis_trasy}>
                    <li ><SingleRandomRoute image='bike.jpg'/></li>
                    <li ><SingleRandomRoute image='outdoor.jpg'/></li>
                    <li><SingleRandomRoute image='silent.jpg'/></li>
                </ul>
            </div>

        )
    }

}

export default Nearby;