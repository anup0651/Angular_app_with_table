import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AppService {

    getUser() {
        return fetch('https://dummyjson.com/users');
    }

    getFilteruser(filterValue: string){
        return fetch(`https://dummyjson.com/users/filter?key=id&value=${filterValue}`);
    }

    updateUser(payload: any){
        return fetch(`https://dummyjson.com/users/${payload.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
    }

    deleteuser(id: number){
        return fetch(`https://dummyjson.com/users/${id}`, {
            method: 'DELETE',
          });
    }
}