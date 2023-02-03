// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Local Imports
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';

@NgModule({
	imports: [CommonModule, RouterModule, HttpClientModule],
	declarations: [SidebarComponent, SvgIconComponent, ConstructionPageComponent],
	exports: [SidebarComponent],
})
export class SharedModule {}
