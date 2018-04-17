import React from 'react';

import {Link} from 'react-router-dom';


class SearchResults extends React.Component {
    render() {

        let resultRoutes = [];

        this.props.data.forEach((route) => {
    console.log(route.id);
            if (this.props.voivodoship === 'calaPolska') {
                resultRoutes.push(<li style={{border: '1px dashed blue', textDecoration: 'none'}}>

                    <Link to={`/route/${route.id}`} style={{textDecoration: 'none', color: 'black'}}>
                        <strong>{route.name}</strong> <br/>
                        {route.location} <br/>
                        {route.distance}
                    </Link>
                </li>)

            } else if(route.voivodeship === this.props.voivodoship) {
                resultRoutes.push(<li style={{border: '1px dashed blue', textDecoration: 'none'}}>
                    <Link to={`/route/${route.id}`} style={{textDecoration: 'none', color: 'black'}}>
                        <strong>{route.name}</strong> <br/>
                        {route.location} <br/>
                        {route.distance}
                    </Link>
                </li>)
            }

        });

        return (
            <div className="search_results">
                <ul style={{listStyle:'none'}}>
                    {resultRoutes}
                </ul>

            </div>
        )
    }
}

export default SearchResults;

