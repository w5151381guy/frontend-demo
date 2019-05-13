import axios from 'axios'

const commonAPI = 'https://ajax-practice-server.herokuapp.com'

const getAPI = `${commonAPI}/todo/api/list`
const postAPI = `${commonAPI}/todo/api/add/`
const deleteAPI = `${commonAPI}/todo/api/delete/`

async function getData() {
  const data = await axios.get(getAPI)
  return data.data
}

async function postData(data) {
  const url = `${postAPI}${data}`
  const result = await axios.post(url)
  return result
}

async function deleteData(index) {
  const url = `${deleteAPI}${index}`
  const result = await axios.delete(url)
  return result
}

export default { getData, postData, deleteData }
