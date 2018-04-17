import React from 'react';

import SearchForm from './searchform.jsx';
import SearchResults from './searchresults.jsx';



class Search extends React.Component {
    state={
        data: [],
        voivodeship: 'calaPolska'
    }

    handleVoivodeshipChange = (value) => {
        this.setState({
            voivodeship: value
        })

    }


    render() {
        if(this.state.data.length === 0) {
            return null
        }
        return (
            <div className='lower'>
                <div className="wrapper search">
                    <SearchForm handleVoivodeshipChange={this.handleVoivodeshipChange}/>
                    <SearchResults voivodoship={this.state.voivodeship} data={this.state.data}/>
                </div>

            </div>
        )
    }

    componentDidMount() {
        fetch(`http://localhost:3000/routes`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Błąd sieci")
                }
            })
            .then(data => {
                this.setState({
                    data: data
                })

            }).catch(err => {
            console.log(err, "Error")
        })
    }
}


export default Search;
