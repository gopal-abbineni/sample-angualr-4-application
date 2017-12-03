import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NginitDirective } from './directives/nginit/nginit.directive';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { CapitalizePipe } from './filters/capitalize/capitalize.pipe';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	RouterModule
  ],
  declarations: [
  		NginitDirective, 
		LoadingComponent, HeaderComponent, CapitalizePipe
  	],
  exports: [
		HeaderComponent,
  		NginitDirective,
		LoadingComponent,
		CapitalizePipe
		]
})
export class SharedModule { }