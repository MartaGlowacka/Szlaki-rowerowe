import React from 'react';

import {Link} from 'react-router-dom';


class SearchResults extends React.Component {
    render() {


        if(this.props.data.length === 0) { return null}
        let resultArray = this.props.data;


        if(this.props.voivodeship === 'calaPolska') {
            resultArray = this.props.data;
        } else {
            resultArray = resultArray.filter( (route) => {
                return route.voivodeship === this.props.voivodeship;
            })


        }

        let tempLevel = [];
        if(this.props.level.length == 0) {
            tempLevel = resultArray.slice();
        } else {
            for(let i = 0; i< resultArray.length; i++) {
                this.props.level.forEach( (level) => {
                    if(level === resultArray[i].level)
                    {tempLevel.push(resultArray[i])}
                })
            }
        }
        resultArray = tempLevel.slice();


        let tempBikeType = [];
        if(this.props.typeOfBike.length == 0) {
            tempBikeType = resultArray.slice();
        } else {
            for(let i = 0; i< resultArray.length; i++) {
                this.props.typeOfBike.forEach( (typeOfBike) => {
                    if(typeOfBike === resultArray[i].typeOfBike)
                    {tempBikeType.push(resultArray[i])}
                })

            }
        }




        resultArray = tempBikeType.slice();

        // console.log(this.props.level, "level");
        // let temp = [];
        // for(let i = 0; i< this.props.level.length; i++) {
        //     // console.log(resultArray)
        //     resultArray.forEach( (route) => {
        //         if(route.level === this.props.level[i])
        //         {temp.push(route)}
        //     })
        // }

        let tempDistance = [];

        resultArray.forEach( (route) => {
            if((route.distance >  this.props.distanceMin) && (route.distance <  this.props.distanceMax ))
                    {tempDistance.push(route)}
                });


resultArray = tempDistance.slice();



        let resultList = resultArray.map( el => {
            return(<li className="result" key={el.id}>

                <Link to={`/route/${el.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <h3>{el.name}</h3>
                    <p>Długość trasy: {el.distance}</p>
                    <p>Poziom trudności: {el.level}</p>
                    <p>BikeType: {el.typeOfBike}</p>
                    <p>wojewodztwoe: {el.voivodeship}</p>
                </Link>
            </li>)});



           return (
               <div className="search_results">
                   <ul style={{listStyle:'none'}}>
                       {resultList}
                   </ul>

               </div>
           )
       }

    }

export default SearchResults;

