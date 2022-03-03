import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  telephoneNumber: string;
  inputs = [
    {
      name: 'input1',
      country: 'USA',
      value: '14056584895',
    },
    {
      name: 'input2',
      country: 'Argentina',
      value: '01154 2974134076',
    },
    {
      name: 'input3',
      country: 'Albania',
      value: '011355042273778',
    },
    {
      name: 'input4',
      country: 'Costa Rica',
      value: '01150622995800',
    },
    {
      name: 'input5',
      country: 'North Korea',
      value: '01185023814397',
    },
    {
      name: 'input6',
      country: 'El Salvador',
      value: '01150322317777',
    },
    {
      name: 'input7',
      country: 'France',
      value: '01133 186995728',
    },
    {
      name: 'input8',
      country: 'Italy',
      value: '01139 0689386502',
    },
    {
      name: 'input9',
      country: 'Portugal',
      value: '011351213665399',
    },
    {
      name: 'input10',
      country: 'Netherlands',
      value: '01131 707006106',
    },
    {
      name: 'input11',
      country: 'Spain',
      value: '01134 918362265',
    },
    {
      name: 'input12',
      country: 'Switzerland',
      value: '01141 445246766',
    },
    {
      name: 'input13',
      country: 'UK',
      value: '01144 03330045000',
    },
    {
      name: 'input14',
      country: 'Australia',
      value: '01161 283499876',
    },
    {
      name: 'input15',
      country: 'Brasil',
      value: '01155 1123456789',
    },
    {
      name: 'input16',
      country: 'Austria',
      value: '01143 6602770054',
    },
    {
      name: 'input17',
      country: 'Ecuador',
      value: '011593989442839',
    },
    {
      name: 'input18',
      country: 'Colombia',
      value: '01157 3204766307',
    },
  ];

  changeValue(event) {
    this.telephoneNumber = event.value;
  }
}
