import axios from 'axios'

const commonApiUrl = 'https://ajax-practice-server.herokuapp.com'

const getApiUrl = `${commonApiUrl}/todo/api/list`
const postApiUrl = `${commonApiUrl}/todo/api/add/`
const deleteApiUrl = `${commonApiUrl}/todo/api/delete/`

async function getData() {
  const data = await axios.get(getApiUrl)
  return data.data
}

async function postData(data) {
  const newPostApiUrl = `${postApiUrl}${data}`
  const result = await axios.post(newPostApiUrl)
  return result
}

async function deleteData(index) {
  const newDeleteApiUrl = `${deleteApiUrl}${index}`
  const result = await axios.delete(newDeleteApiUrl)
  return result
}

export default { getData, postData, deleteData }
