import { Injectable } from '@angular/core';
import { RESTRickAndMorty, Results } from '../rickAndMorty.interface';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  private serviceUrl: string = 'https://rickandmortyapi.com/api/character/?name=';

  public resultados: Results[];
  
  async obtenerPersonajes(Anel){
    
    let monse = await fetch (`${this.serviceUrl}${Anel}`)  // &apiKey=${this.apikey} 
      let data: RESTRickAndMorty = await monse.json()
    return data.results;
  }

  constructor() { }
}