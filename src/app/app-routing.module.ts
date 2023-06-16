// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('src/app/pages/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: '',
		loadChildren: () => import('src/app/pages/shell/shell.module').then((m) => m.ShellModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
