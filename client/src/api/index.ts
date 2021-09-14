import axios from 'axios'
import { toast } from 'react-toastify';
import { BetType } from '../assets/interfaces';

let apiUrl: string;

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://gentle-thicket-01072.herokuapp.com';
} else {
  apiUrl = 'http://localhost:8000';
}

const api = axios.create({
    baseURL: `${apiUrl}/api`,
    headers: {
      'Authentication': localStorage.getItem('secret')
    }
})

// Catch all unauthorized responses
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      toast('Du är inte inloggad', { type: 'error' });
    }
    return Promise.reject();
});

// Bets
export const getAllBets = () => api.get(`/bets`);
export const createBet = (bet: BetType) => api.post(`/bets`, bet);
export const deleteBet = (id: any) => api.delete(`/bets/${id}`);
export const updateBet = (bet: BetType) => api.put(`/bets/${bet._id}`, bet);

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
    updateBet,
}

export default apis