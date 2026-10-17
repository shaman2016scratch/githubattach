class UserRequest {
    constructor (d) {
        this.login = d.login = "unknown"
        this.id = d.id || null
        this.node_id = d.node_id || null
        this.avatar_url = d.avatar_url || "https://example.com/image.png"
        this.gravatar_id = d.gravatar_id || ""
    }
}

class RepoRequest {
    constructor (d) {
        this.id = d.id || null
        this.node_id = d.node_id || null
    }
}

export {
    UserRequest,
    RepoRequest
}