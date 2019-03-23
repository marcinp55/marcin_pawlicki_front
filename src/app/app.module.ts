import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {CalculatorEditorComponent} from './calculator/calculator-editor/calculator-editor.component';
import {CalculatorDisplayComponent} from './calculator/calculator-display/calculator-display.component';
import {CountryService} from './service/country.service';
import {CalculatorFormService} from './service/calculator-form.service';
import {NetApiService} from './service/net-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculatorComponent,
    CalculatorEditorComponent,
    CalculatorDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CountryService,
    CalculatorFormService,
    NetApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
