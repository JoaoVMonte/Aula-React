const { default: axios } = require("axios");

const apidisney = axios.create({
    baseURL: 'https://api.disneyapi.dev'
})

export default apidisney