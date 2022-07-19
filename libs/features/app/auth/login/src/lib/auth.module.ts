import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule, MaterialBricksModule, FlexLayoutModule } from '@iote/bricks-angular';
import { UIWorkflowModule } from '@iote/ui-workflows';

import { UserStateModule } from '@app/state/user';
import { MultiLangModule } from '@ngfi/multi-lang';

import { ConvlPageModule } from '@app/elements/layout/page-convl';

import { LoginComponent }            from './components/login/login.component';
import { SocialLoginComponent }      from './components/login-social/login-social.component';
import { TraditionalLoginComponent } from './components/login-traditional/login-traditional.component';
import { RegisterComponent }         from './components/register/register.component';
import { ForgotPasswordModalComponent }       from './modals/forgot-password-modal/forgot-password-modal.component';

import { AuthPageComponent } from './pages/auth/auth.page.component';
import { AuthRouterModule }  from './auth-router.module';

/**
 * Auth module. Contains the auth of the app and Base Access Control.
 */
@NgModule({
  imports: [CommonModule, RouterModule, MultiLangModule,
            MaterialDesignModule, MaterialBricksModule, FlexLayoutModule, UIWorkflowModule,
            FormsModule, ReactiveFormsModule,
            UserStateModule,

            ConvlPageModule,

            AuthRouterModule],

  declarations: [LoginComponent, SocialLoginComponent, TraditionalLoginComponent,
                 RegisterComponent, ForgotPasswordModalComponent,

                  AuthPageComponent],

  exports: [],
})
export class AuthModule { }