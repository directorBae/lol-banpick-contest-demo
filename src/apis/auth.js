import axios from 'axios';

function getAuth({production = true}) {
if (production) {
    return axios.get('/auth');

} else {
    return {
        "auth_key": "123",
        "status": 200,
    }
}
}

export { getAuth };