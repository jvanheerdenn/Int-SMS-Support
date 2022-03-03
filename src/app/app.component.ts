import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  telephoneNumber: string;
  inputs = [
    {
      name: 'input1',
      country: 'USA',
      value: '14056584895'
    },
    {
      name: 'input2',
      country: 'Argentina',
      value: '01154 2974134076'
    },
    {
      name: 'input3',
      country: 'Albania',
      value: '011355042273778'
    },
    {
      name: 'input4',
      country: 'Costa Rica',
      value: '01150622995800'
    },
  ]

  changeValue(event){
    this.telephoneNumber = event.value;
  }
}
