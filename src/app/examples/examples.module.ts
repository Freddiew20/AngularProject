import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule  } from '@angular/forms';

import { LandingComponent } from './landing/landing.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LandingComponent,
    ]
})
export class ExamplesModule { }
