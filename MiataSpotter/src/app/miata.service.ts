import { Injectable } from '@angular/core';
import { MiataCard } from './miatacard';

@Injectable({
  providedIn: 'root'
})
export class MiataService {

  url = 'http://localhost:3000/miatas';

  async getAllMiatas():  Promise<MiataCard[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getMiataById(id: number): Promise<MiataCard | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {}
  }

  signUpForNotifications(firstName: string, phoneNumber: string) {
    console.log(`We will send notifications to ${firstName} at ${phoneNumber}`)
  }

  constructor() { }
}
