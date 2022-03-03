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
      value: '14056584895'
    },
    {
      name: 'input2',
      value: '01154 2974134076'
    },
    {
      name: 'input3',
      value: '011355042273778'
    },
  ]

  changeValue(event){
    this.telephoneNumber = event.value;
  }
}
