export default class Token {
    /**
     * FUntion dedicated to get the token
     * @param cls 
     * @returns 
     */
    static getToken(cls: any): string {
        return cls.$cookies.get('token')
    }

    /**
     * Funtion dedicated to setToken on cookies
     * @param cls 
     * @param token 
     * @returns 
     */
    static setToken(cls: any, token: string): void {
        return cls.$cookies.set('token', token)
    }

    /**
     * Function dedicated to return whats inside the token
     * @param cls 
     * @param token 
     * @returns 
     */
    static decode(cls: any, token: string): Record<string, unknown> {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''))
        return JSON.parse(jsonPayload)
    }
}