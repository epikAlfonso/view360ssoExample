import { AxiosResponse } from "axios";
import http from "./http";

class View360Sso {
    public checkLogin(): Promise<AxiosResponse> {
        return http.get('/auth', {
            params: {
                callback: `${window.location.origin}/callback`,
                client_id: '689591611272-25gW0oKr2nIHlBZDFzt0rpeDHYagd1nS.app.view360.com'
            }
        })
    }    
}

export default new View360Sso()