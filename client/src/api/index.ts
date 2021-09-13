import axios from 'axios'
import { BetType } from '../assets/interfaces';

const api = axios.create({
    baseURL: 'https://gentle-thicket-01072.herokuapp.com/api',
})

// Bets
export const getAllBets = () => api.get(`/bets`);
export const createBet = (bet: BetType) => api.post(`/bets`, bet);
export const deleteBet = (id: any) => api.delete(`/bets/${id}`);

// Sports
export const getAllSports = () => api.get(`/sports`)
export const createSport = (sport: { name: string }) => api.post(`/sports`, sport);

// Betters
export const getAllBetters = () => api.get(`/betters`);
export const createBetter = (better: { name: string }) => api.post(`/betters`, better);

// Leagues
export const getAllLeagues = () => api.get(`/leagues`);
export const createLeague = (league: { name: string }) => api.post(`/leagues`, league);

// Types
export const getAllTypes = () => api.get(`/types`);
export const createType = (type: { name: string }) => api.post(`/types`, type);

const apis = {
    getAllSports,
    getAllBets,
    getAllBetters,
    getAllLeagues,
    getAllTypes,
    createBet,
    createBetter,
    createSport,
    createLeague,
    createType,
    deleteBet,
}

export default apis