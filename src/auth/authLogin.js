import { servicesAuth } from "../services/RegisterService"


export const authLogin = async (data) => {
  let response =  await servicesAuth.login(data)
  return response.status
}