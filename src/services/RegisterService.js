
import axios from "axios"
import {http} from './http/apiConfig'


export const servicesAuth = {
  register: async (data) => {
    let response = await http.post(`/sorteio/register`, data)
    return response.data
  },

  login: async (data)=>{
    let response = await http.post('/sorteio/login', data)
    return response.data
  }
}