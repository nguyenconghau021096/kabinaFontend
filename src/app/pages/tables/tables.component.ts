import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShelfServices } from 'src/app/services/shelf.services';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  userObject: any;
  currentUser:User;
  shelves :any;
  searchForm: FormGroup;
  submitted = false;
  shelfElementSelected: any;
  numShelfClick: any;
  //shelfElementClicked:any;
  shelfObjectClicked:any;

  listShelf: any;


  constructor(
    private formBuilder: FormBuilder,
    private shelfServices: ShelfServices,
    private authenticationService: AuthenticationService,
  ){
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {

    // this.searchForm = this.formBuilder.group({
    //   keyword:['']
    // });
    // this.getShelfListWrapper();
    this.getData()
  }

  
  getData() {
    this.shelfServices.getShelfList(this.currentUser.business.unitId).toPromise()
    .then(data=>{
      this.listShelf = this.shelfServices.parseShelfDataToArray(data);
    })
  }
  // getShelfListWrapper(){
    // this._shelfServices.getUser(this.currentUser.userId).subscribe(
    //   data => {
    //     this.userObject = data;
    //     this.getShelfList(this.userObject.businessUnit.id);
    //   },
    //   err => {
    //     alert(err);
    //   }
    // )
  // }

  // getShelfList(id){
  //   this._shelfServices.getShelfList(id).subscribe(
  //     data => {
  //       console.log(data);
  //       this.shelves = data;
  //     },
  //     err => {
  //       alert(err);
  //     });
  // }

  // get f() {
  //   return this.searchForm.controls;
  // }
  
  // search(){
  //   //console.log(this.shelves[0])
  //   this.submitted = true;
  //   // Reset shelf found 
  //   if(this.shelfElementSelected != undefined){
  //     this.shelfElementSelected.classList.remove('shelf-owner');
  //   }
    
  //   var keyword = this.searchForm.value.keyword;
  //   var shelfSet = document.getElementsByClassName('shelf');
     
  
  //   for(var i =0; i < shelfSet.length; i++){
  //     if(shelfSet[i].innerHTML == keyword){
  //       this.shelfElementSelected = shelfSet[i];
  //       this.shelfElementSelected.classList.add('shelf-owner');
  //       this.shelfElementSelected.scrollIntoView({
  //         behavior: "smooth",                 //Defines the transition animation.
  //         block: "start", inline: "nearest"   //Defines vertical alignment.
  //       });
  //       this.numShelfClick = keyword;
  //       return;
  //     }
  //   }
  //   alert('Not Found');
  // }

  
  // onShelfClick(shelf){
  //   this.shelfElementSelected 
  //   var shelfModal= document.getElementById("shelf-modal");
  //   this.shelfObjectClicked = shelf;
  //   console.log(shelf)
  //   shelfModal.style.display = "block";
  // }
  // onCloseModal(){
  //   var shelfModal= document.getElementById("shelf-modal");
  //   shelfModal.style.display = "none";
  // }



}
