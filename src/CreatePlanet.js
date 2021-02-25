import React, { Component } from 'react'
import styles from './CreatePlanet.js';
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
    // simpler way:
    // magnetic_field_strong: !this.state.magnetic_field_strong //(this is the convention for toggling)


    handleTypeChange = (e) =>
        this.setState({ type_id: Number(e.target.value) })



    handleSubmit = async (e) => {
        e.preventDefault();
        await makePlanet(this.state);
        this.props.history.push('/planets'); //procedural redirect ...push is a method filed under history in props
    }



    render() {

        console.log(this.state.planet);
        console.log(this.state.diameter);
        console.log(this.state.gravity);
        console.log(this.state.magnetic_field_strong);
        console.log(this.state.owner_id);
        console.log(this.state.type_id);

        return (
            <div className={styles.formArea}>
                <form onSubmit={this.handleSubmit}>
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
                        {/* we can leave the {} segment without an explicit conditional because it is truthy */}
                    </label>
                    <label>Type?
                        <select onChange={this.handleTypeChange}>
                            <option value="1" selected={this.state.type_id === 1}>Terrestrial</option>
                            <option value="2" selected={this.state.type_id === 2}>Gaseous</option>
                            {/* are we still using the value now that we have selected? should value use {} or ""? */}
                        </select>
                    </label>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}


