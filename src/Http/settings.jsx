import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1'
})
export default instance