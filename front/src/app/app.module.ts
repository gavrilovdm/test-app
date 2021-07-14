import {BrowserModule} from '@angular/platform-browser'
import {NgModule, LOCALE_ID} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {registerLocaleData} from '@angular/common'
import localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
