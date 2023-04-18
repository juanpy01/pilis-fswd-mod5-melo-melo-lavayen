import { api } from './api'

const ENDPOINT = `${api.server + api.apiVersion}/event`

export const getEventList = async () => {
  try {
    const response = await fetch(ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch events')
  }
}
