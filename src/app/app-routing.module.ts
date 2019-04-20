import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PlanningComponent } from './planning/planning.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TeamComponent } from './team/team.component';
import { EditDashComponent } from './edit-dash/edit-dash.component';
import { TodolistComponent } from './todolist/todolist.component';
import { IndicateursComponent } from './indicateurs/indicateurs.component';

const routes: Routes = [
  { path: 'Auth', 
    component: AuthComponent 
  },
  { path: 'Indicateur', 
  component:IndicateursComponent
},
  { path: 'Todolist', 
  component: TodolistComponent 
},
  { path: 'Team', 
    component: TeamComponent 
  },
  { path: 'Editdash', 
    component: EditDashComponent 
  },

  { path: 'Dashboard', 
    component: DashboardComponent 
  },
  { path: 'Projects', 
    component: ProjectsComponent 
  },

  { path: 'op', 
    component: UserFormComponent 
  },
  
  { path: 'Footer',
   component: FooterComponent 
  },

  {path:'home', 
  component:HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  { path: 'planning', 
    component: PlanningComponent 
  },
  
  {
    path: 'signup',
    component: RegisterComponent
  },
  
  { path: '',
   redirectTo: 'home',
    pathMatch: 'full' 
  }
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
