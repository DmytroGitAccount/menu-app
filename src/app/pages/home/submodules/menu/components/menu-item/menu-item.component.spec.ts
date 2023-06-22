// Libraries Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Project Imports
import { dishMock } from 'src/app/core/mocks';

// Local Imports
import { MenuItemComponent } from './menu-item.component';

describe('MenuItemComponent', () => {
	let component: MenuItemComponent;
	let fixture: ComponentFixture<MenuItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenuItemComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuItemComponent);
		component = fixture.componentInstance;
		component.dish = dishMock;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
