import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';

import { MenuHeaderComponent } from './menu-header.component';

describe('MenuHeaderComponent', () => {
	let component: MenuHeaderComponent;
	let fixture: ComponentFixture<MenuHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenuHeaderComponent],
			imports: [SharedModule],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
