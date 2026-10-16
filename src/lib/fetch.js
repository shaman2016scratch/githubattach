const githubFetch = (path = "/", param = {}) => {
    const res = fetch(`https://api.github.com${path}`, param)
    return res
}

export default githubFetch