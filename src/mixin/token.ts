export default class Token {
    static getToken(cls: any): string {
        return cls.$cookies.get('token')
    }

    static setToken(cls: any, token: string): void {
        return cls.$cookies.set('token', token)
    }
}