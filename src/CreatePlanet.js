import React, { Component } from 'react'
import { getPlanet, makePlanet } from './LectureNotes'
//import makePlanet from api-utils

export default class CreatePlanet extends Component {

    state = {
        name: '',
        diameter: 2,
        magnetic_field_strong: false,
        type_id: 1
    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    // handleDiameterChange will need to be numberified: Number(e.target.value)

    handleMagneticField = (e) =>
        this.setState({
            magnetic_field_strong: this.state.magnetic_field_strong === false
                ? true
                : false
        })



    // simpler way:
    // magnetic_field_strong: !this.state.magnetic_field_strong (this is the convention for toggling)

    //for create button:
    handleSubmit = async (e) => {
        e.preventDefault(); //maintains form from resetting, etc

        const planet = await makePlanet(this.state);

        //makePlanet(this.state); //b/c state is the info about the new planet

        // alert(JSON.stringify(candy, true, 2));
        this.props.history.push('/list'); //procedural redirect ...push is a method filed under history in props
    }



    render() {
        //here be cool zone: console.log:
        console.log(this.name.state);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Planet Name
                        {/* controlled inputs: take all power away from the DOM */}
                        <input onChange={this.handleNameChange}></input>
                    </label>
                    <label>Diameter
                        <input type="number"></input>
                    </label>
                    <label>Magnetic Field Strong?
                        <input type="checkbox" checked={this.state.magnetic_field_strong}></input>
                        {/* we can leave the {} segment without an explicit conditional because it is truthy */}
                    </label>
                    <label>Type?
                        <select onChange={this.handleTypeChange}>
                            <option value="1" selected={this.state.type_id === 1}>Terrestrial</option>
                            <option value="2" selected={this.state.type_id === 2}>Gaseous</option>
                            {/* are we still using the value now that we have selected? should value use {} or ""? */}
                        </select>
                    </label>
                    <button>Create or Terraform</button>

                </form>

            </div>
        )
    }
}


