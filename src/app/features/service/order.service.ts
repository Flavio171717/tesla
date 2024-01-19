import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  modSelected: string = "default";
  colSelected: string = "default";
  colDescriptionSelected: string | undefined = "default";
  colPriceSelected: number | undefined = 0;
  configIdSelected: number | undefined = 0;
  descriptionSelected: string | undefined = "default"
  rangeSelected: number | undefined = 0;
  maxSpeedSelected:  number | undefined = 0;
  priceSelected:  number | undefined = 0;
  yokeSelected: boolean | undefined = false;
  towHitchSelected: boolean | undefined = false;
constructor() { }


  add(model: string, color: string, colorDescription: string | undefined,colPrice: number | undefined) {
    this.modSelected = model;
    this.colSelected = color;
    this.colDescriptionSelected = colorDescription;
    this.colPriceSelected = colPrice
  }

  addConfig(configId:number | undefined,description : string | undefined, range: number | undefined, maxSpeed : number | undefined,price: number | undefined) {
    this.configIdSelected = configId;
    this.descriptionSelected = description;
    this.rangeSelected = range;
    this.maxSpeedSelected = maxSpeed;
    this.priceSelected = price;
  }

  addYoke(yoke: boolean |undefined){
    this.yokeSelected = yoke;
  }

  addTowHitch(towHitch: boolean |undefined){
    this.towHitchSelected = towHitch;
  }



}
