import { getUser } from "../lib/apis.js";

const users = {
    getApiConent: getUser,
    getLogin: async (user) => {
        const user = await getUser(user)
        return user.login
    },
    getId: async (user) => {
        const user = await getUser(user)
        return user.id
    },
    getNodeId: async (user) => {
        const user = await getUser(user)
        return user.node_id
    }
}

export default users