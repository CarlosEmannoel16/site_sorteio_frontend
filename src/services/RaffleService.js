import { http } from "./http/apiConfig";

export const RaffleService = {

  getRaffleNumbers: async (data) => {
    let result = await http.get(`/sorteio/award/${data}`)
    return result.data.raffle

  }
}