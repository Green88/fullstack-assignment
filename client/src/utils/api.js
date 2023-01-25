import axios from 'axios';

export const login = (data) => axios.post('http://localhost:3001/api/v1/users/login', data);

export const getJobs = () => axios.get('http://localhost:3001/api/v1/users/jobs');
