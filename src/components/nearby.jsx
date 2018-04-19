import React from 'react';
import SingleRandomRoute from './singleRandomRoute.jsx'

class Nearby extends React.Component {

    state = {
        text: this.props.text,
        show: 'none',

    }

    handleClick = () => {

        this.state.show == 'none' ? this.setState({show: 'block'}) : this.setState({show: 'none'});
        
    }


    render () {

        const opis_trasy = {
            listStyle: 'none',
            display: this.state.show,
        }


        const rozwin = {
            textAlign: 'center',
            cursor: 'pointer',

        }


        return (
            <div className="main_nearby">
            <h1 className="rozwin" onClick={this.handleClick}><a name="trzecieId">{this.props.text}</a></h1>
                <hr/>
                <br/>
                <br/>
                {/* <img src="../images/bike.jpg" /> */}

                <ul className="random_route_list" style={opis_trasy}>
                    <li ><SingleRandomRoute image='bike.jpg'/></li>
                    <li ><SingleRandomRoute image='outdoor.jpg'/></li>
                    <li><a name="trzecieId"><SingleRandomRoute image='silent.jpg'/></a></li>
                </ul>
            </div>

        )
    }

}

export default Nearby;