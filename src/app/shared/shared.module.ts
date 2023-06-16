// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Local Imports
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';

@NgModule({
	imports: [CommonModule, RouterModule, HttpClientModule],
	declarations: [SvgIconComponent, ConstructionPageComponent, DatePipePipe],
	exports: [DatePipePipe, SvgIconComponent],
})
export class SharedModule {}
