import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GistsRoutingModule } from './gists-routing.module';
import { GistsComponent } from './gists.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';


@NgModule({
  declarations: [GistsComponent],
  imports: [
    CommonModule,
    GistsRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzListModule,
    NzTagModule,
    NzModalModule,
    NzDescriptionsModule,
  ]
})
export class GistsModule { }
