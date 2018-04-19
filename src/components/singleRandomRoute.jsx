import React from 'react';

class SingleRandomRoute extends React.Component {

    state = {
        src: `https://www.traseo.pl/mapa/92828/m/0/i/0/g/0/`,
        id: [],
        random: Math.floor(Math.random()*128),
        image: this.props.image,
    }


    render () {
        
    
        if (this.state.id.length === 0) {
            return null
        }

        return(

            
            <div className="single" >            
                <div className='imag'></div>              
                {/* <img style={{height: '200px', width: '350px'}}  src={`/src/images/${this.state.image}`} /></div> */}
                <iframe style={{flex: '1'}} src={`https://www.traseo.pl/mapa/${this.state.id[this.state.random]}/m/0/i/0/g/0/`} style={{width:"250px", height:"100%",frameborder:'0'
             }}/>
            </div>
           
           
        ) 
    }

    componentDidMount () {
        fetch(`http://localhost:3000/routes/`)
       .then(resp => {
           if(resp.ok) {
               return resp.json()
           } else {
               throw new Error("Błąd sieci")
           }
       })
       .then(data => {
           let tab =[];
           
        for (let i=0; i<data.length; i++) {
            tab.push(data[i].id)
        }
           this.setState({
               id: tab
           })

       }).catch(err => {
       console.log(err, "Error")
   })
    }
}

export default SingleRandomRoute;