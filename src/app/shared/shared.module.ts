// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Local Imports
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';

@NgModule({
	imports: [CommonModule, RouterModule, HttpClientModule],
	declarations: [SidebarComponent, SvgIconComponent, ConstructionPageComponent, DatePipePipe],
	exports: [SidebarComponent, DatePipePipe],
})
export class SharedModule {}
