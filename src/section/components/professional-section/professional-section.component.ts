import { Component, OnInit } from '@angular/core';
import { ProfessionalSectionModel } from 'src/section/model/professional-section.model';
import * as _ from 'lodash';
import { GENDERS , LOCALSTORAGEKEYS , MESSAGE , PAGE ,ROUTES} from '../../config/config';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-professional-section',
  templateUrl: './professional-section.component.html',
  styleUrls: ['./professional-section.component.scss']
})
export class ProfessionalSectionComponent implements OnInit {
  professionalInfoModel : ProfessionalSectionModel;
  professionalInfoOfEmployees : ProfessionalSectionModel[];
  isShowProfessionalModal : boolean;
  isDisableSubmitButton: boolean;
  genderArray = GENDERS;
  pageName = PAGE;
  constructor(public appServiceObject:AppService , public router:Router) {
    this.isShowProfessionalModal = false;
    this.isDisableSubmitButton = false;
    this.professionalInfoModel = new ProfessionalSectionModel();
    this.professionalInfoOfEmployees = new Array<ProfessionalSectionModel>();
    this.appServiceObject.currentPageName = PAGE.PROFESSIONALSECTION;
   }
  ngOnInit(): void {
    this.readDataFromLocalStorage();
  }
  /**
   * Sets the route to main page.
   */
  backToPage() {
    this.router.navigate(['/'+ROUTES.SECTION]);
     this.appServiceObject.currentPageName = PAGE.MAINPAGE;
  }

/**
 * Method reads the data from local storage. and sets into an array if data is already stored in local storage.
 */
  readDataFromLocalStorage() {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGEKEYS.PROFESSIONAL));
    this.professionalInfoOfEmployees = dataFromLocalStorage !== null ? dataFromLocalStorage : [];
  }

  /**
   * Method opens the popup.
   */
  openModal() {
    this.isShowProfessionalModal = true;
  }
  
  /**
   * Method clears all the fields on popup.
   */
  clearFields() {
    this.professionalInfoModel = new ProfessionalSectionModel();
    this.isDisableSubmitButton = false;
  }

 /**
 * Method close the pop up if user click cross button on popup.
 */
  closeModel() {
    this.isShowProfessionalModal = false;
    this.clearFields();
  }

 /**
  * method creates fills an array on every submit click. This array further used to display personal infomation in table.
  * Method also sets this array into local storage.
  */
  submitProfessionalInfo() {
    if(!_.isEmpty(this.professionalInfoModel) && this.isDisableSubmitButton) {
      this.professionalInfoModel.experience = this.professionalInfoModel.experience === null ? MESSAGE.NOTPROVIDED : this.professionalInfoModel.experience;
      this.professionalInfoOfEmployees.push(this.professionalInfoModel);
      localStorage.setItem(LOCALSTORAGEKEYS.PROFESSIONAL, JSON.stringify(this.professionalInfoOfEmployees));
    }
    this.isShowProfessionalModal = false;
    this.clearFields();
  }

  /**
   * Method decides whether to enable and disable the submit button on popup based on mandatory fields are filled.
   */
  showHideSubmitButton() {
    if(this.professionalInfoModel.employeeId.length !== 0 && this.professionalInfoModel.employeeName.length !== 0 && this.professionalInfoModel.gender !== "-1" && this.professionalInfoModel.joiningDate !== null ) {
      this.isDisableSubmitButton = true;
    } else {
      this.isDisableSubmitButton = false;
    }
  }
}
