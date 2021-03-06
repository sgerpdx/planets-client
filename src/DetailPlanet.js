import React, { Component } from 'react'
import { getPlanet, updatePlanet, deletePlanet, getTypes } from './API-utils.js'
import './CreatePlanet.css'

export default class DetailPlanet extends Component {
    state = {
        planet: '',
        diameter: 4,
        gravity: '',
        magnetic_field_strong: false,
        owner_id: 1,
        planet_type: '',
        type_id: 1
    }

    componentDidMount = async () => {
        const types = await getTypes();

        const planet = await getPlanet(this.props.match.params.id);

        this.setState({
            ...planet,
            types
        })


    }

    handleNameChange = (e) =>
        this.setState({ planet: e.target.value })


    handleDiameterChange = (e) =>
        this.setState({ diameter: Number(e.target.value) })


    handleGravityChange = (e) =>
        this.setState({ gravity: e.target.value })


    handleMagneticField = (e) =>
        this.setState({
            magnetic_field_strong: this.state.magnetic_field_strong === false
                ? true
                : false
        })

    handleTypeChange = (e) =>
        this.setState({ type_id: Number(e.target.value) })



    handleSubmit = async (e) => {
        e.preventDefault();
        await updatePlanet(this.props.match.params.id, this.state);
        this.props.history.push('/planets');
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await deletePlanet(this.props.match.params.id);
        this.props.history.push('/planets');
    }

    render() {

        return (
            <div className="formArea">
                <form className="actualForm" onSubmit={this.handleSubmit}>
                    <label>
                        Planet Name
                        <input value={this.state.planet} onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Diameter
                        <input value={this.state.diameter} type="number" onChange={this.handleDiameterChange}></input>
                    </label>
                    <label>
                        Gravity
                        <input value={this.state.gravity} onChange={this.handleGravityChange}></input>
                    </label>
                    <label>Magnetic Field Strong?
                        <input value={this.state.magnetic_field_strong} type="checkbox" checked={this.state.magnetic_field_strong}
                            onChange={this.handleMagneticField}></input>
                    </label>
                    <label>Type?
                        <select onChange={this.handleTypeChange}>
                            <option value="1" selected={this.state.type_id === 1}>Terrestrial</option>
                            <option value="2" selected={this.state.type_id === 2}>Gaseous</option>
                        </select>
                    </label>
                    <button onClick={this.handleSubmit}>Terraform</button>
                    <button onClick={this.handleDelete}>Destroy</button>
                </form>
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
