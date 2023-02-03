// Libraries Imports
import { DateTime } from 'luxon';
import { Component } from '@angular/core';

@Component({
	selector: 'app-menu-header',
	templateUrl: './menu-header.component.html',
	styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent {
	public readonly today = DateTime.now().toISO();
}
