import React from 'react';
//import request from 'superagent';
import style from './ListPlanets.css';
import { getPlanets } from './API-utils.js';

export default class PlanetsDisplay extends React.Component {

    state = {
        planets: [],
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const planets = await getPlanets();

        this.setState({ planets: planets })

        this.setState({ loading: false });
    }




    render() {

        return (
            <>

                {/* <div className="presentation-square">
                    {this.state.loading
                        ? <JupiterImg />
                        : <div>{spaceFacts}</div>
                    }
                </div> */}

                {/* <Link to={`/planets/${planet.id}`}> */}
                <div className="planet-gallery">
                    {this.state.planets.map(planet => <div className="planet-orb">
                        <p>{planet.planet}</p>
                        <p>{planet.diameter}</p>
                        <p>{planet.gravity}</p>
                        <p>{planet.magnetic_field_strong}</p>
                        <p>{planet.type_id}</p>
                    </div>)}
                </div>


            </>





        )
    }
}