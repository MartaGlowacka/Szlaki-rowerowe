import React from 'react';

class Description extends React.Component {

    state = {
        typeOfBike: this.props.typeOfBike,
        distance: this.props.distance,
        level: this.props.level,
        location: this.props.location,
        name: this.props.name,
        duration: this.props.duration,

    }

    render () {

        const opis_trasy = {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '70px'
        }

        return (
            <div>
                <h1>{this.state.name}</h1>
                <hr/>
                <br/>
                <br/>
                <ul style={opis_trasy}>
                    <li><strong>Lokalizacja:</strong> {this.state.location}</li>
                    <li><strong>Rodzaj aktywności:</strong> {this.state.typeOfBike}</li>
                    <li><strong>Dystans:</strong> {this.state.distance} km</li>
                    <li><strong>Duration:</strong> {this.state.duration} h</li>
                    <li><strong>Stopień trudności:</strong> {this.state.level}</li>
                    
                </ul>
            </div>
        )
    }
}

export default Description;