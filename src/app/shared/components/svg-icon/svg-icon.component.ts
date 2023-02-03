// Libraries Imports
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-svg-icon',
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
	@Input() src!: string;

	public svgIcon?: SafeHtml;

	constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

	public ngOnInit(): void {
		this.http
			.get(this.src, { headers: { Accept: 'image/svg+xml' }, responseType: 'text' })
			.subscribe((data) => {
				this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(data);
			});
	}
}
