import axios from 'axios'
const baseUrl =  'api/resumedata' //'http://localhost:3001/api/resumedata'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll}