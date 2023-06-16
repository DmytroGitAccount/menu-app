// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
