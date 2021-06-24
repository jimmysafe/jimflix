import axios from "axios"
import { Category, Movie } from '../types'

const apiKey = 'api_key=d8018dc388bb07b2260f6021dad093b2'
const baseUrl = 'https://api.themoviedb.org/3'

export const getPopular = async(): Promise<Category> => {
    const { data } = await axios.get(`${baseUrl}/movie/popular?${apiKey}`)
    return  data
}

export const getTopRated = async(): Promise<Category> => {
    const { data } = await axios.get(`${baseUrl}/movie/top_rated?${apiKey}`)
    return  data
} 

export const getLatest = async(): Promise<Category> => {
    const { data } = await axios.get(`${baseUrl}/movie/latest?${apiKey}`)
    return  data
} 

export const getMovie = async(movieId: number): Promise<Movie> => {
    const { data } = await axios.get(`${baseUrl}/movie/${movieId}?${apiKey}&append_to_response=videos,credits,similar`)
    return data
}