import request from 'superagent';

// Lab: React requests to get planet-server-two endpoints:

// state lives in components, requests live in functions (here)

const URL = 'https://lit-shore-34578.herokuapp.com'

export async function getPlanets() {
    const response = await request.get(`${URL}/planets`);
    return response.body;
    // above is un-restructured; below is restructured (also used by other functions):
    // const { body } = await...
    // return body; ...this is destructuring from response.body
}


export async function getTypes() {
    const { body } = await request.get(`${URL}/types`);
    return body;
}


// this one has a PARAMETER (id):
// think of it like a recipe: "you'll need an id to make this work...put it into the URL"
export async function getPlanet(id) {
    const { body } = await request.get(`${URL}/planets/${id}`);
    return body;
}


// this is for the /post endpoint:
// assuming user will supply the right object properties from form (aParticularPlanet)...
export async function makePlanet(aParticularPlanet) {
    const { body } = await request.post(`${URL}/planets/`).send(aParticularPlanet);
    return body;
}


// this is for the /delete endpoint:
export async function deletePlanet(id) {
    const { body } = await request.delete(`${URL}/planets/${id}`);
    return body;
}


// this is for the /put endpoint:
export async function updatePlanet(id, aParticularPlanet) {
    const { body } = await request.post(`${URL}/planets/${id}`).send(aParticularPlanet);
    return body;
}
