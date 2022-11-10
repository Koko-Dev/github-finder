import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
                            })

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
                                     })

  const response = await github.get(`/search/users?${params}`)

  return response.data.items
}

// Get user and repos
export const getUser = async (login) => {
  const [user] = await Promise.all([
    github.get(`/users/${login}`)
                                   ])
  return { user: user.data }
}



