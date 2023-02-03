// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { ConstructionPageComponent } from './shared/components/construction-page/construction-page.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		component: ConstructionPageComponent,
	},
	{
		path: 'discount',
		component: ConstructionPageComponent,
	},
	{
		path: 'dashboard',
		component: ConstructionPageComponent,
	},
	{
		path: 'message',
		component: ConstructionPageComponent,
	},
	{
		path: 'notifications',
		component: ConstructionPageComponent,
	},
	{
		path: 'settings',
		component: ConstructionPageComponent,
	},
	{
		path: 'logout',
		component: ConstructionPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
