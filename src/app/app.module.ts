import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { HighDirective } from './high.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { QuoteDetailComponent } from './quotes-detail/quotes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    HighDirective,
    QuoteFormComponent,
    DateCountPipe,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
