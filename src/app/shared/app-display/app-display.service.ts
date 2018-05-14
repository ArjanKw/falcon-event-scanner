import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';

/// Sets display/styling properties of the app at the highest level.
export class AppDisplayService {
    backgroundColor: string;
    // dataChange: Observable<any>;
  
    constructor() {
      // this.dataChange = new Observable((observer:Observer) {
      //   this.dataChangeObserver = observer;
      // });
    }
  
    setBackgroundColor(color:string) {
      this.backgroundColor = color;
      // this.dataChangeObserver.next(this.data);
    }
  }
  