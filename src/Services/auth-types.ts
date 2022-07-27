export type AuthRequest = {
    username: string
    password: string
}

export type AuthResponse = {
    token: string
    refresh_token: string
}
