// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { ShellRoutingModule } from './shell-routing.module';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
	declarations: [SidebarComponent, ShellComponent],
	imports: [CommonModule, SharedModule, ShellRoutingModule],
})
export class ShellModule {}
