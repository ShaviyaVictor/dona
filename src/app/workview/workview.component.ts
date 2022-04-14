import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { OurWorkService } from '../our-work.service';

@Component({
  selector: 'app-workview',
  templateUrl: './workview.component.html',
  styleUrls: ['./workview.component.css']
})
export class WorkviewComponent implements OnInit {

  allworks:any;

  beneficiary!:FormGroup;
  
    constructor( private ourWorkService:OurWorkService, private router:Router) { }
  
    ngOnInit(): void {
  
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
}
