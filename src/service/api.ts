import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://thronesapi.com/api/v2',
})

export const fetchCompanies = () =>
  axiosInstance.get('/Characters').then((res) => res.data)
