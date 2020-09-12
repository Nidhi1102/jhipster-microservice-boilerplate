import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MicroserviceBoilerplateSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [MicroserviceBoilerplateSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
