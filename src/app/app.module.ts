import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { ShoppingEffects } from './store/effects/shopping.effects';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { DataService } from './services/data-service/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, { delay: 0 }),
    StoreModule.forRoot({
      shopping: ShoppingReducer
    }),
    EffectsModule.forRoot([ShoppingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
