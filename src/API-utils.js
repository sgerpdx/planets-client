import request from 'superagent';

// state lives in components, requests live in functions (here)

const URL = 'https://lit-shore-34578.herokuapp.com'

export async function getPlanets() {
    const response = await request.get(`${URL}/planets`);
    return response.body;
}


export async function getTypes() {
    const { body } = await request.get(`${URL}/types`);
    return body;
}


export async function getPlanet(id) {
    const { body } = await request.get(`${URL}/planets/${id}`);
    return body;
}


export async function makePlanet(aParticularPlanet) {
    const { body } = await request.post(`${URL}/planets/`).send(aParticularPlanet);
    return body;
}


export async function deletePlanet(id) {
    const { body } = await request.delete(`${URL}/planets/${id}`);
    return body;
}


export async function updatePlanet(id, aParticularPlanet) {
    const { body } = await request.put(`${URL}/planets/${id}`).send(aParticularPlanet);
    return body;
}
