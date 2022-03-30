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
      value: '011 542974134076',
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
      value: '011 33186995728',
    },
    {
      name: 'input8',
      country: 'Italy',
      value: '011 390689386502',
    },
    {
      name: 'input9',
      country: 'Portugal',
      value: '011351213665399',
    },
    {
      name: 'input10',
      country: 'Netherlands',
      value: '011 31707006106',
    },
    {
      name: 'input11',
      country: 'Spain',
      value: '011 34918362265',
    },
    {
      name: 'input12',
      country: 'Switzerland',
      value: '011 41445246766',
    },
    {
      name: 'input13',
      country: 'UK',
      value: '011 4403330045000',
    },
    {
      name: 'input14',
      country: 'Australia',
      value: '011 61283499876',
    },
    {
      name: 'input15',
      country: 'Brasil',
      value: '011 551123456789',
    },
    {
      name: 'input16',
      country: 'Austria',
      value: '011 436602770054',
    },
    {
      name: 'input17',
      country: 'Ecuador',
      value: '011593989442839',
    },
    {
      name: 'input18',
      country: 'Colombia',
      value: '011 573204766307',
    },
    {
      name: 'input19',
      country: 'Kazakhstan',
      value: '011  77273333000',
    },
    {
      name: 'input20',
      country: 'China',
      value: '011 86273333000',
    },
    {
      name: 'input21',
      country: 'China',
      value: '011 862026098979',
    },
  ];

  changeValue(event) {
    this.telephoneNumber = event.value;
  }
}
