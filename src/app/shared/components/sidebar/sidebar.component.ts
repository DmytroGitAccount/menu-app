// Libraries Imports
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	@Input() buttons = [
		{
			name: 'Home',
			page: 'home',
		},
		{
			name: 'Discount',
			page: 'discount',
		},
		{
			name: 'Dashboard',
			page: 'dashboard',
		},
		{
			name: 'Message',
			page: 'message',
		},
		{
			name: 'Notifications',
			page: 'notifications',
		},
		{
			name: 'Settings',
			page: 'settings',
		},
	];
}
