import githubFetch from "./fetch.js";

const getRepo = async (author, repo) => {
    const res = await githubFetch(`/repos/${author}/${repo}`)
    const result = await res.json()
    return result
}

const getUser = async (user) => {
    const res = await githubFetch(`/users/${user}`)
    const result = await res.json()
    return result
}

export {
    getRepo, getUser
}