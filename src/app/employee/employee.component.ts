import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'app/Models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  public employees: Employee[] = [
    {name : "Ed Sheeran", designation:"Singer", salary: 450000, dateOfBirth: new Date("1991-2-17"), shortBio: "Edward Christopher Sheeran MBE is an English singer-songwriter. Born in Halifax, West Yorkshire and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project"},
    {name : "Jim Rohn", designation:"Motivator", salary: 850000, dateOfBirth: new Date("1997-2-1"), shortBio: "For more than 40 years, Jim Rohn honed his craft like a skilled artist—helping people the world over sculpt life strategies that expanded their imagination of what is possible. "},
    {name : "Johnny Depp", designation:"actor", salary: 3690000, dateOfBirth: new Date("1963-7-9"), shortBio: "John Christopher Depp II is an American actor, producer and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTA awards."},
    {name : "Tom Holland", designation:"actor", salary: 350000, dateOfBirth: new Date("1996-7-1"), shortBio: "Thomas Stanley Holland is an English actor. His accolades include a British Academy Film Award, three Saturn Awards, a Guinness World Record and an appearance on the Forbes 30 Under 30 Europe list. Some publications have called him one of the most popular actors of his generation"},
    {name : "Elon Musk", designation:"CEO", salary: 76500000, dateOfBirth: new Date("1971-7-28"), shortBio: "Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI."},
    {name : "Robert Kiyosaki", designation:"Businessman", salary: 13500000, dateOfBirth: new Date("1947-4-8"), shortBio: "Robert Toru Kiyosaki is an American businessman and author. Kiyosaki is the founder of Rich Global LLC and the Rich Dad Company, a private financial education company that provides personal finance and business education to people through books and videos."},
  ];

  public displayedColumns: string[] = ['name', 'designation', 'salary', 'dateOfBirth', 'shortBio', 'action'];
  public dataSource = new MatTableDataSource<Employee>();
  public editBio: string;
  public editDateOfBirth: Date;
  public editDesignation: string;
  public editIndex: number;
  public editName: string;
  public editSalary: number;
  public inputBio: string;
  public inputDateOfBirth: Date;
  public inputDesignation: string;
  public inputName: string;
  public inputSalary: number;
  public isEdit: boolean = false;
  public newEmployee: Employee = new Employee();
  public selectedTab = new FormControl(0);

  inputFormGroup = this._formBuilder.group({
    name: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required),
  });

  get name(): any {
    return this.inputFormGroup.get('name');
  }
  get designation(): any {
    return this.inputFormGroup.get('designation');
  }
  get salary(): any {
    return this.inputFormGroup.get('salary');
  }
  get dateOfBirth(): any {
    return this.inputFormGroup.get('dateOfBirth');
  }
  get bio(): any {
    return this.inputFormGroup.get('bio');
  }

  editFormGroup = this._formBuilder.group({
    editNameControl: new FormControl('', Validators.required),
    editDesignationControl: new FormControl('', Validators.required),
    editSalaryControl: new FormControl('', Validators.required),
    editDateOfBirthControl: new FormControl('', Validators.required),
    editBioControl: new FormControl('', Validators.required),
  });

  get editNameControl(): any {
    return this.editFormGroup.get('editNameControl');
  }
  get editDesignationControl(): any {
    return this.editFormGroup.get('editDesignationControl');
  }
  get editSalaryControl(): any {
    return this.editFormGroup.get('editSalaryControl');
  }
  get editDateOfBirthControl(): any {
    return this.editFormGroup.get('editDateOfBirthControl');
  }
  get editBioControl(): any {
    return this.editFormGroup.get('editBioControl');
  }

    

    numberOnly(event: any): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }

  ngOnInit(): void {
    console.log(history);
    console.log(history.state);
    if(history.state != 0){
      this.selectedTab.setValue(history.state);
    }
    this.dataSource.data = this.employees;
  }

  OnChangeTab(event){
    history.pushState(event,null);
    console.log(history.state);
    this.selectedTab.setValue(event);
  }

  OnAddNewEmployee() {
    this.newEmployee.name = this.inputName;
    this.newEmployee.designation = this.inputDesignation;
    this.newEmployee.salary = this.inputSalary;
    this.newEmployee.dateOfBirth = this.inputDateOfBirth;
    this.newEmployee.shortBio = this.inputBio;
    this.employees.push(this.newEmployee);
    this.selectedTab.setValue(0);
    this.inputFormGroup.reset();
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
  }

  OnEditEmployee(input: Employee, index: number){
    this.editIndex = index;
    this.isEdit = true;
    this.selectedTab.setValue(2);
    this.editBio = input.shortBio;
    this.editDesignation = input.designation;
    this.editName = input.name;
    this.editSalary = input.salary
    this.editDateOfBirth = input.dateOfBirth;
  }

  OnSaveEdit(){
    this.employees[this.editIndex].name = this.editName;
    this.employees[this.editIndex].designation = this.editDesignation;
    this.employees[this.editIndex].dateOfBirth = this.editDateOfBirth
    this.employees[this.editIndex].salary = this.editSalary;
    this.employees[this.editIndex].shortBio = this.editBio;
    this.editFormGroup.reset();
    this.selectedTab.setValue(0);
    this.isEdit = false;
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
  }

  
  
  

}
