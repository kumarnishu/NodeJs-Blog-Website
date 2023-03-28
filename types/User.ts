export type User = {
    _id?: string,
    username?: string,
    password?: string,
    email?: string,
    created_at?: Date,
    email_verified?: Boolean,
    last_login?: Date,
    is_active?: Boolean,
    dp?: string
}
export type UserBody = Request['body'] & User