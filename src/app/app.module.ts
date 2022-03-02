import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InternationalNumberFormatterPipe } from './international-number-formatter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InternationalNumberFormatterPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
