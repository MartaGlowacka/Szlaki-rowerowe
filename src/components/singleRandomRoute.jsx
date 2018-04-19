import React from 'react';

class SingleRandomRoute extends React.Component {

    state = {
        src: `https://www.traseo.pl/mapa/92828/m/0/i/0/g/0/`,
        id: [],
        random: Math.floor(Math.random()*128),
        image: this.props.image,
    }

    // randomRoute = () => {
    //     let random = Math.floor(Math.random()*this.state.id.length);
    //    return random
    // }

    render () {
        
        

        if (this.state.id.length === 0) {
            return null
        }

        

        const style = {
            width:'50%',
            height: '200px',
            display: 'flex',
            margin: '0 auto',

        }



        return(
            <div style={style}>
            
                <div style={{order: '2', backgroundColor: 'pink', width: '60%'}}>
                <img style={{height: '200px', width: '350px'}}  src={`/src/images/${this.state.image}`} /></div>
                <iframe style={{order: '1'}} src={`https://www.traseo.pl/mapa/${this.state.id[this.state.random]}/m/0/i/0/g/0/`} style={{width:"200px", height:"200px",frameborder:'0', border:'border:1px solid #000' }}/>
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