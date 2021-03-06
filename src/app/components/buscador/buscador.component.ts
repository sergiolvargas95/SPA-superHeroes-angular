import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})

export class BuscadorComponent implements OnInit {
  heroes:any[] = [];
  public termino!:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = (params['termino'])
      console.log(this.heroes);
    })
  }
}
