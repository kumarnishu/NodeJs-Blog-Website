export type User = {
    _id?: string,
    username: string,
    email: string,
    password: string,
    created_at?: Date,
    is_admin?:Boolean,
    email_verified?: Boolean,
    last_login?: Date,
    is_active?: Boolean,
    resetPasswordToken?:string,
    resetPasswordExpire?: Date
    emailVerifyToken?:string,
    emailVerifyExpire?: Date
}
export type UserMethods = {
    getAccessToken: () => string,
    getRefreshToken: () => string,
    comparePassword: (password: string) => boolean,
    getResetPasswordToken: () => string,
    getEmailVerifyToken: () => string
}
export type UserBody = Request['body'] & User