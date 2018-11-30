import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorTranslationComponent } from './error-translation/error-translation.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ErrorTranslationComponent ],
  bootstrap: [ AppComponent ],
  entryComponents: [ErrorTranslationComponent]
})
export class AppModule { }
