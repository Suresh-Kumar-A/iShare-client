export interface User {
    uid: string,
    username: string,
    password?: string,
    emailAddress: string,
    displayName: string,
    status: boolean,
    createdAt?: Date
}