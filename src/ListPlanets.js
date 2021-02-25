import React from 'react';
//import request from 'superagent';
import styles from './ListPlanets.css';
import { getPlanets } from './API-utils.js';
import { Link } from 'react-router-dom';

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

    magneticFieldCheck(strength) {
        if (strength === true) {
            return 'yes';
        } else {
            return 'no';
        }
    }


    render() {



        return (
            <div className={styles.listBody}>
                <p className="banner">Behold a Selection of Planets</p>
                <div className={styles.planetGallery}>
                    {this.state.planets.map(planet =>
                        <Link to={`/planets/${planet.id}`} key={planet.planet}>
                            <div className={styles.planetOrb}>
                                <p>{planet.planet} - {planet.id}</p>
                                <p>diameter: {planet.diameter}km</p>
                                <p>gravity: {planet.gravity}x earth</p>
                                <p>very magnetic? {this.magneticFieldCheck(planet.magnetic_field_strong)}</p>
                                <p>type: {planet.planet_type}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}
