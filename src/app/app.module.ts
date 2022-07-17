import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { EmployeeComponent } from './employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StringPipePipe } from './Custom_Pipe/string-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    StringPipePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

  ],
  providers: [ MatDatepickerModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
