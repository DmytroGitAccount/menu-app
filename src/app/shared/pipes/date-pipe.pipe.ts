// Libraries Imports
import { DateTime } from 'luxon';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
	public transform(date: string): unknown {
		return DateTime.fromISO(date).toLocaleString({
			weekday: 'long',
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		});
	}
}
