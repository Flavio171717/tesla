import { OrderService } from '../../../../service/order.service';
import { ModelsDTO } from './../../../dto/models.dto';
import { Component, ElementRef, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Models } from '../../../dto/models';
import { FormsModule } from '@angular/forms';
import { TeslaConfigService } from '../../../../service/tesla-config.service';
import { Color } from '../../../dto/color';



@Component({
  selector: 'app-order-step-one',
  templateUrl: './order-step-one.component.html',
  styleUrls: ['./order-step-one.component.css']
})
export class OrderStepOneComponent implements OnInit {
  @Output() canPassToNextStep: EventEmitter<boolean> = new EventEmitter<boolean>();
  model: Models[] = [];
  color: Color[] | undefined = [];
  models: ModelsDTO = {};
  modSelected: string = "default";
  colSelected: string = "default";
  isEnabledStep2:boolean=false;
  isEnabledStep3:boolean=false;

  constructor(private http: HttpClient, private teslaConfig: TeslaConfigService, public displayImageService:OrderService) {}

  ngOnInit() {
    this.teslaConfig.getModel().subscribe(res => {
      this.model = res;
      //this.color = res.colors

      //si on revient à step 1 pour modifier après avoir été sur step 2
      if (this.displayImageService.modSelected !='default'){
        this.modSelected=this.displayImageService.modSelected;
      }

      //si on revient à step 1 pour modifier après avoir été sur step 2
      if (this.displayImageService.colSelected !='default'){
        this.colSelected=this.displayImageService.colSelected;

        this.loadColor(this.displayImageService.modSelected);
      }
    });
  }

  loadColor(codeModel: string){
    if (codeModel=='3'){
      this.displayImageService.yokeSelected=false;
      this.displayImageService.towHitchSelected=false;
    }
    this.isEnabledStep2=true;
    this.isEnabledStep3=true;
    const index = this.model.findIndex(x => x.code === codeModel);
    const col=this.model[index];
    this.color=col.colors;
    if ((this.colSelected=='default') || ((this.colSelected=='red' || this.colSelected=='blue') && (codeModel=='C'))){
      this.colSelected="white"
    }

    let colordescription:string | undefined;
    let colorPrice:number | undefined;
    if (this.color != undefined){
      let colorArray = this.color.filter(x => x.code == this.colSelected);
      colordescription=colorArray[0].description;
      colorPrice=colorArray[0].price;
    }
    //ici on a la bonne couleur et le bon model choisi
    this.displayImageService.add(this.modSelected, this.colSelected,colordescription,colorPrice);
  }

  addToDisplayImage(color: string){
    let colordescription:string | undefined;
    let colorPrice:number | undefined;
    if (this.color != undefined){
      let colorArray = this.color.filter(x => x.code == this.colSelected);
          colordescription=colorArray[0].description;
          colorPrice=colorArray[0].price;
    }
    this.displayImageService.add(this.modSelected, color, colordescription,colorPrice);
  }


}
