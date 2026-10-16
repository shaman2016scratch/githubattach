import { getRepo } from "./src/lib/apis.js"
import githubFetch from "./src/lib/fetch.js"
import users from "./src/components/users.js"
import repos from "./src/components/repos.js"

const githubattach = {
    fetch: githubFetch,
    getLibraryRepo: async () => {
        const repo = await getRepo("shaman2016scratch", "githubattach")
        return repo
    },
    users,
    repos
}

export default githubattach