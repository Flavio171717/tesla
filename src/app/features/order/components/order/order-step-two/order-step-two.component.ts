import { Option } from './../../../dto/option';
import { OrderService } from '../../../../service/order.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { TeslaConfigService } from '../../../../service/tesla-config.service';
import { Config } from '../../../dto/config';

@Component({
  selector: 'app-order-step-two',
  templateUrl: './order-step-two.component.html',
  styleUrls: ['./order-step-two.component.css']
})
export class OrderStepTwoComponent implements OnInit {
  configSelected: number | undefined = 0;
  config: Config[] = [];
  option: Option = {};
  colSelected: string = "default";
  yokeIsChecked: boolean = false;
  towHitchIsChecked: boolean = false;
  isEnabledStep2:boolean=false;
  isEnabledStep3:boolean=false;
  constructor(public displayImageService:OrderService, private teslaConfig: TeslaConfigService) { }

  ngOnInit() {
    this.teslaConfig.getOptions(this.displayImageService.modSelected).subscribe(res => {
      this.config=res.configs!;
      this.option=res;

      //si on revient à step 2 pour modifier après avoir été sur step 3
      if (this.displayImageService.configIdSelected){
        this.isEnabledStep2=true;
        this.isEnabledStep3=true;
        this.configSelected=this.displayImageService.configIdSelected;
      }
      if (this.displayImageService.yokeSelected){
        this.yokeIsChecked=this.displayImageService.yokeSelected;
      }
      if (this.displayImageService.towHitchSelected){
        this.towHitchIsChecked=this.displayImageService.towHitchSelected;
      }
    });
  }


  loadDataConfig(id: number){
    this.isEnabledStep2=true;
    this.isEnabledStep3=true;
    const index = this.config.findIndex(x => x.id == id);
    const dataConfig=this.config[index];
    this.displayImageService.addConfig(this.configSelected,dataConfig.description,dataConfig.range, dataConfig.speed,dataConfig.price);
  }

  onCheckboxChangeTowHitch(event: Event){
    if ((event.target as HTMLInputElement).checked){
      this.displayImageService.addTowHitch(true);
    }else{
      this.displayImageService.addTowHitch(false);
    }
  }

  onCheckboxChangeYoke(event: Event){
    if ((event.target as HTMLInputElement).checked){
      this.displayImageService.addYoke(true);
    }else{
      this.displayImageService.addYoke(false);
    }

  }


}
