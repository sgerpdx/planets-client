import React from 'react';
import request from 'superagent';
import style from './PlanetsDisplay.css';
import PlanetItem from './PlanetItem.js';
import JupiterImg from './jupiter.jpg';
import { getPlanets, getTypes, getPlanet, makePlanet, deletePlanet } from './API-utils.js';

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

                <Link to={`/planets/${planet.id}`}>
                    <div>
                        {this.state.planets.map(planet => <div>
                            <p>{planet.planet}</p>
                        </div>)}
                    </div>
                </Link>

            </>





        )
    }
}