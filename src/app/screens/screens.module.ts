import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule  } from '@angular/forms';

import { LandingComponent } from './landing/landing.component';
import { ProfileCardComponent } from 'app/screens/profile-card/profile-card.component';
import { AboutUsComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AppModule } from 'app/app.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        // AppModule
    ],
    declarations: [
        LandingComponent,
        AboutUsComponent,
        ServicesComponent,
        ProfileCardComponent
    ],
})
export class ScreensModule { }
 