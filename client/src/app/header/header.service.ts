import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class HeaderService{
  private dataObs = new Subject<boolean>();

  getData(){
    return this.dataObs;
  }

  updatedData(data: boolean){
    this.dataObs.next(data);
  }

}

