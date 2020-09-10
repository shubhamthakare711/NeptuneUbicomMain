import { Component, OnInit } from '@angular/core';
import { PersonalSectionModel } from 'src/section/model/personal-section.model';
import { GENDERS , LOCALSTORAGEKEYS, PAGE , MESSAGE , ROUTES} from '../../config/config'
import * as _ from 'lodash';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-section',
  templateUrl: './personal-section.component.html',
  styleUrls: ['./personal-section.component.scss']
})
export class PersonalSectionComponent implements OnInit {
  isShowPersonalModal: boolean;
  isDisableSubmitButton: boolean;
  personalInfo: PersonalSectionModel;
  genderArray = GENDERS;
  pageNames = PAGE;
  personalInfoOfEmployees : PersonalSectionModel[] = [];
  constructor(public appServiceObject:AppService , public router:Router) { 
    this.isShowPersonalModal= false;
    this.isDisableSubmitButton = false;
    this.personalInfo = new PersonalSectionModel();
    this.personalInfoOfEmployees = new Array<PersonalSectionModel>();
    this.appServiceObject.currentPageName = PAGE.PERSONALSECTION;
  }

  ngOnInit(): void {
    this.readDataFromLocalStorage();
  }

  /**
   * Method set the route to main page. also returns to main page.
   */
  backToPage() {
    this.router.navigate(['/'+ROUTES.SECTION]);
    this.appServiceObject.currentPageName = PAGE.MAINPAGE;
  }
  /**
   * Method gets data from Local storage if data is stored in local storage earlier.
   */
  readDataFromLocalStorage() {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGEKEYS.PERSONAL));
    this.personalInfoOfEmployees = dataFromLocalStorage !== null ? dataFromLocalStorage : [];
  }
  /**
   * method to open bootstrap modal.
   */
  openModal() {
    this.isShowPersonalModal = true;
  }
  /**
   * Method clears the every field in popup. and disables the submit button.
   */
  clearFields() {
    this.personalInfo = new PersonalSectionModel();
    this.isDisableSubmitButton = false;
  }
/**
 * Method close the popup if user clicks on cross button.
 */
  closeModel() {
    this.isShowPersonalModal = false;
    this.clearFields();
  }
  /**
   * Method enables the submit button if all mandatory fields are filled else disable.
   */
  showHideSubmitButton() {
    if(this.personalInfo.firstName.length !== 0 && this.personalInfo.lastName.length !== 0 && this.personalInfo.gender !== "-1" && this.personalInfo.birthdate !== null ) {
      this.isDisableSubmitButton = true;
    } else {
      this.isDisableSubmitButton = false;
    }
  }
 /**
  * method creates fills an array on every submit click. This array further used to display personal infomation in table.
  */
  submit() {
    if(!_.isEmpty(this.personalInfo) && this.isDisableSubmitButton) {
      this.personalInfo.address = this.personalInfo.address.length === 0 ? MESSAGE.NOTPROVIDED : this.personalInfo.address;
      this.personalInfoOfEmployees.push(this.personalInfo);
      localStorage.setItem(LOCALSTORAGEKEYS.PERSONAL, JSON.stringify(this.personalInfoOfEmployees));
      this.isShowPersonalModal = false;
      this.clearFields();
    } else {
      this.isDisableSubmitButton = false;
    }
   
  }
}
