// Libraries Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Project Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';

@NgModule({
	declarations: [MenuComponent, MenuItemComponent, MenuHeaderComponent, MenuCategoriesComponent],
	imports: [CommonModule, HttpClientModule, SharedModule, FormsModule],
	exports: [MenuComponent],
})
export class MenuModule {}
