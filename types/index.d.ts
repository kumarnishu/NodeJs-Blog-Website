//recognize it as module
export { }

declare global {
    namespace Express {
        export interface Request {
            user: User | null
        }
    }
}