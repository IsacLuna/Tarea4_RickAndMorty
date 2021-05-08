import { Component } from '@angular/core';
import { Results } from 'src/app/rickAndMorty.interface';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./estilos.css'],  
})
export class RickAndMortyComponent {

    Anel: string;
    Personajes: Results[] = [];
    validacion: boolean;

    constructor(private Buscador: RickAndMortyService) { }

    async guardar(){
      //this.Personajes=[];
      this.validacion = false;
      this.Personajes= await this.Buscador.obtenerPersonajes(this.Anel);
      if(this.Personajes == undefined)
        this.validacion = true;
      //console.log(this.Personajes);
    }
  }