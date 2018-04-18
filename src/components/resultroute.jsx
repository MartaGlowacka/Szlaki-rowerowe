import React from 'react';



class ResultRoute extends React.Component {

        render() {

        console.log(this.props);
        return (
            <div className="lower">

            </div>
        )
    }

    componentDidMount() {
        fetch(`http://localhost:3000/routes/${this.props.match.params.id}`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Błąd sieci")
                }
            })
            .then(data => {
                console.log(data)
                this.setState({
                    name: data.name
                })

            }).catch(err => {
            console.log(err, "Error")
        })
    }
}



export default ResultRoute;
