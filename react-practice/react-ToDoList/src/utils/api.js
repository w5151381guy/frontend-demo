import axios from 'axios'

const commonApiUrl = 'https://ajax-practice-server.herokuapp.com'

const getApiUrl = `${commonApiUrl}/todo/api/list`
const postApiUrl = `${commonApiUrl}/todo/api/add/`
const deleteApiUrl = `${commonApiUrl}/todo/api/delete/`
const loginApiUrl = `${commonApiUrl}/todo/api/login/`
const logoutApiUrl = `${commonApiUrl}/todo/api/logout/`

async function getData() {
  const { data } = await axios.get(getApiUrl)
  return data
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

async function postLogin(account, password) {
  const newLoginApiUrl = `${loginApiUrl}${account}/${password}`
  const result = await axios.post(newLoginApiUrl)
  return result
}

async function postLogout() {
  const result = await axios.post(logoutApiUrl)
  return result
}

export default { getData, postData, deleteData, postLogin, postLogout }
