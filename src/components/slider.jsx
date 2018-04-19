import React from 'react';

class Slider extends React.Component {


    state = {
        id: '',
        random_nr: 0,
        name: [],
        distance: [],
        start: [],
        level: [],
        random: Math.floor(Math.random()*128),
    }


    handleClick = () => {
        
    }

    render () {


        if (this.state.name.length === null) {
            return null
        }

        let route_name = this.state.name[this.state.random];
        let distance = this.state.distance[this.state.random];
        let start = this.state.start[this.state.random];
        let level = this.state.level[this.state.random];

        let color = 'black';



        return (
            <div className="slider">
            <div className="wrapper">
            <strong className="strong">Wyrusz w kaczą podróż!</strong>
             <div className="next">
            <span style={{backgroundColor: 0 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={0}></span>
            <span style={{backgroundColor: 1 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={1}></span>
            <span style={{backgroundColor: 2 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={2}></span>
            <span style={{backgroundColor: 3 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={3}></span>
            <span style={{backgroundColor: 4 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={4}></span>
            <span style={{backgroundColor: 5 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={5}></span> 
            <span style={{backgroundColor: 6 === this.state.random_nr ? color : 'rgba(255, 255, 255, 0.3)'}} data-id={6}></span>
            </div>
             <img src={`/src/images/${this.state.id}`} />  
           
                       
            <div className="random_main_page">
            <h3>Trasa na dziś:</h3>
                <div className="picture"></div>
                <div className="description">
                <h1>{route_name}</h1>
                
                    <ul>
                    <li><span>Start:</span> {start}</li>  
                    <li><span>Dystans:</span> {distance}km</li>
                    <li><span>Poziom:</span> {level}</li>
                </ul>
               <hr/>
                <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula...</p>
                
                </div>
                <button>Zobacz więcej propozycji</button>
                </div>
            
               
            </div>
           
                 
            </div>
        )
    }

    componentDidMount () {
   const photo = ['afternoon.jpg', 'bicycling.jpg', 'bike.jpg', 'gruzja.jpg', 'man.jpg', 'fot3.JPG', 'fot4.JPG', 'fot5.JPG', 'fot6.JPG', 'fot7.JPG', 'fot8.JPG'];

        this.id = setInterval(()=> {
                (this.state.random_nr < photo.length-1) ? this.setState({random_nr: this.state.random_nr+1}) : this.setState({random_nr: 0})
            
            this.setState({         
                id: photo[this.state.random_nr]
            })
            
        }, 4000)


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
           let tab2 = [];
           let tab3 = [];
           let tab4 = [];
           
        for (let i=0; i<data.length; i++) {

            // for (let j=15; j=0; j--) {
            //     let empty_space = data[i].name[j].indexOf(" ")
            //     if (empty_space > -1) {
            //         tab.push(`${data[i].name.slice(0,15)}..`)
            //     }
            // }


            // tab.push(`${data[i].name.slice(0,15)}..`)
            tab.push(data[i].name)
            tab2.push(data[i].distance)
            tab3.push(data[i].location)
            tab4.push(data[i].level)
        }
           this.setState({
               name: tab,
               distance: tab2,
               start: tab3,
               level: tab4,
           })

       }).catch(err => {
       console.log(err, "Error")
   })




    }

    


}

export default Slider;

