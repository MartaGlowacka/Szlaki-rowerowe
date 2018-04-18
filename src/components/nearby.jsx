import React from 'react';
import SingleRandomRoute from './singleRandomRoute.jsx'

class Nearby extends React.Component {

    state = {
        text: this.props.text,

    }



    render () {

        const opis_trasy = {
            listStyle: 'none',
            // display: 'flex',
            // justifyContent: 'space-around',
        }

        const single = {
            // height: '80px',
            // width: '50vw',
    
            display: 'flex',
            marginTop: '25px',
            

        }


        return (
            <div>
            <h1>{this.props.text}</h1>
                <hr/>
                <br/>
                <br/>
                {/* <img src="../images/bike.jpg" /> */}

                <ul style={opis_trasy}>
                    <li style={single}><SingleRandomRoute image='bike.jpg'/></li>
                    <li style={single}><SingleRandomRoute image='outdoor.jpg'/></li>
                    <li style={single}><SingleRandomRoute image='silent.jpg'/></li>
                </ul>
            </div>

        )
    }

}

export default Nearby;