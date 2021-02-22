import { HttpHeaders } from "@angular/common/http";

const token = localStorage.getItem('token');
export const authHeader = {
    headers: new HttpHeaders({
        "x-access-token" : token!
    })
}