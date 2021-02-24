import React, { Component } from 'react'

export default class DetailPlanet extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}










//for the DetailPlanet page, we want to pre-fill:
//we want to use our id to hit the get/:id endpoint using componentDidMount lon load

//const planet = await getPlanet(this.props.mat.params.planetId); (re: 'planetId' s/b from the path in the router in App.js)
//const types = await getTypes();

//once we have the data, it s/b set at the state to pre-fill the forms:

// const { planet, diameter, etc } = await getPlanet(this.props.mat.params.planetId);

// this.setState({ planet: planet, diameter: diameter, etc })
