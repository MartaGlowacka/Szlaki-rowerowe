import React from 'react';


class SingleMap extends React.Component {

    state = {
        src:`https://www.traseo.pl/mapa/${this.props.id}/m/0/i/0/g/0/`,
    }

    render () {
        return (
            <div>
            <iframe src={this.state.src} style={{width:"50vw", height:"60vh",frameborder:'5px', border:'border:4px solid black' }}>
            </iframe>
        </div>
        )
    }
}



export default SingleMap;