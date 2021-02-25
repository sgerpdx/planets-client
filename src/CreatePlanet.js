import React, { Component } from 'react'
import './CreatePlanet.css';
import { makePlanet } from './API-utils.js';


export default class CreatePlanet extends Component {
    state = {
        planet: '',
        diameter: 4,
        gravity: '',
        magnetic_field_strong: false,
        owner_id: 1,
        type_id: 1
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
        await makePlanet(this.state);
        this.props.history.push('/planets');
    }



    render() {

        console.log(this.state.planet);
        console.log(this.state.diameter);
        console.log(this.state.gravity);
        console.log(this.state.magnetic_field_strong);
        console.log(this.state.owner_id);
        console.log(this.state.type_id);

        return (
            <div className="formArea">
                <form className="actualForm" onSubmit={this.handleSubmit}>
                    <label>
                        Planet Name
                        <input onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Diameter
                        <input type="number" onChange={this.handleDiameterChange}></input>
                    </label>
                    <label>
                        Gravity
                        <input onChange={this.handleGravityChange}></input>
                    </label>
                    <label>Magnetic Field Strong?
                        <input type="checkbox" checked={this.state.magnetic_field_strong}
                            onChange={this.handleMagneticField}></input>
                    </label>
                    <label>Type?
                        <select onChange={this.handleTypeChange}>
                            <option value="1" selected={this.state.type_id === 1}>Terrestrial</option>
                            <option value="2" selected={this.state.type_id === 2}>Gaseous</option>
                        </select>
                    </label>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}
