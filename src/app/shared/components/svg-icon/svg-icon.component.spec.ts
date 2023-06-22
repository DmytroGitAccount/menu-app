import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';

describe('SvgIconComponent', () => {
	let component: SvgIconComponent;
	let fixture: ComponentFixture<SvgIconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SvgIconComponent],
			imports: [HttpClientModule],
		}).compileComponents();

		fixture = TestBed.createComponent(SvgIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
