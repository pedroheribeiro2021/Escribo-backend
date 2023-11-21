
export interface IUserRequest {
    name: string
    email: string
    password: string
    phones: []
}

export interface IUserLogin {
    email: string
    password: string
}