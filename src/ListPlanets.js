import React from 'react';
//import request from 'superagent';
//import './ListPlanets.css';
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
                                <p>very magnetic? {planet.magnetic_field_strong}</p>
                                <p>type code: {planet.type_id}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}
