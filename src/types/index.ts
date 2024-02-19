export type Task = {
    id: number
    title: string
    created_at: Date
    update_at: Date
}
export type CsrfToken = {
    csrf_token: string 
}
export type Credential = {
    email: string
    password: string
}