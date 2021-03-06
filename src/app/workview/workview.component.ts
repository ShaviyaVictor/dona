import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { OurWorkService } from '../our-work.service';
import { UserTokenService } from '../user-token.service';

@Component({
  selector: 'app-workview',
  templateUrl: './workview.component.html',
  styleUrls: ['./workview.component.css']
})
export class WorkviewComponent implements OnInit {
  private roles: string[] = [];

  isLoggedIn = false;
  isLoggedOut = true;
  admin_role!:boolean;
  donar_role!:boolean;
  charity_role!:boolean;
  username?: string;
  allworks:any;

  beneficiary!:FormGroup;
  
    constructor( private ourWorkService:OurWorkService, private router:Router,private usertoken: UserTokenService) { }
  
    ngOnInit(): void {

      this.isLoggedIn = !!this.usertoken.getToken();

      if (this.isLoggedIn) {
        const user = this.usertoken.getUser();
        this.roles = user.roles;
        this.isLoggedOut = false;
        this.username = user.username;
        this.admin_role = user.is_admin;
        this.donar_role = user.is_donor;
        this.charity_role = user.is_charity;
        
      }
  
      this.beneficiary=new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
        // charity: new FormControl(''),
        user_image: new FormControl('')
      });
  
      
      this.ourWorkService.ourWork().subscribe((works)=>{
        this.allworks=works
        // console.log("All our work",works);
        
      })
    }
  
    get f(){
      return this.beneficiary.controls;
    }
  
    // file:any
    // onFileSelected(e:any) {
    //   this.file = e.target.files[0];
    //   console.log(this.file)
  
    // }
    onSubmit(){

      console.log("Output",this.beneficiary.value);
      this.ourWorkService.addBeneficiary2(this.f['title'].value,this.f['description'].value,this.f['user_image'].value,).pipe(first()).subscribe(
      (data:any)=>{
        this.router.navigate(['/work']);
        this.reloadPage()
        console.log(data);
      }
      )
    }

    workRedirect(pageName:string){
      this.router.navigate([`${pageName}`])
    }
  
    reloadPage(): void {

      window.location.reload();
    }
    
    addBeneficiaries(){
      // const formData = new FormData();
      // formData.append('file', this.beneficiary.get('user_image').value);
  
  this.ourWorkService.addBeneficiary(this.beneficiary).subscribe((newBeneficiary:any)=>{
  
    this.allworks=newBeneficiary
    console.log(newBeneficiary);
    
  })
    }

changeSource(event:any) {      
  event.target.src = "https://res.cloudinary.com/gracemwende/image/upload/v1649917811/default_ctf6ds.jpg";
}
}
