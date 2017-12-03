// import { Directive, Input, OnInit  } from '@angular/core';

// @Directive({
//   selector: '[ngInit]'
// })
// export class NginitDirective implements OnInit  {

//   	constructor() { }

//   	@Input() ngInit;
	
// 	ngOnInit() {
// 	    if (this.ngInit) {
// 	        this.ngInit();
// 	    }
// 	}

// }


import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

@Directive({
  selector: '[onCreate]'
})
export class NginitDirective {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {      
     this.onCreate.emit('dummy'); 
  } 

}
