import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService} from './services/user.service';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { PlanningComponent } from './planning/planning.component';
import { from } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { TokenStorageService } from './auth/token-storage.service';
import { AuthInterceptor } from './auth/auth-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserFormComponent } from './user-form/user-form.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TeamComponent } from './team/team.component';
import { EditDashComponent } from './edit-dash/edit-dash.component';
import { TodolistComponent } from './todolist/todolist.component';
import { IndicateursComponent } from './indicateurs/indicateurs.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatPaginatorIntl} from '@angular/material';
import {PropagationStopModule} from 'ngx-propagation-stop';





@NgModule({
  declarations: [

    AppComponent,
    AuthComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    PlanningComponent,
    DashboardComponent,
    ProjectsComponent,
    UserFormComponent,
    TeamComponent,
    EditDashComponent,
    TodolistComponent,
    IndicateursComponent
    
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
    
  ],
  providers: [httpInterceptorProviders, UserService, AuthService, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
