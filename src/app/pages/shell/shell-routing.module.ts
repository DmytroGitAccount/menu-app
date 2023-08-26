// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project Imports
import { ConstructionPageComponent } from 'src/app/shared/components/construction-page/construction-page.component';

// Local Imports
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
	{
		path: '',
		component: ShellComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{
				path: 'home',
				loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule),
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
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ShellRoutingModule {}
