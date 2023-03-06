// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Local Imports
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			autoPause: true,
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
