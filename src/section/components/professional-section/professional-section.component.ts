import { Component, OnInit } from '@angular/core';
import { ProfessionalSectionModel } from 'src/section/model/professional-section.model';
import * as _ from 'lodash';
import { GENDERS , LOCALSTORAGEKEYS , MESSAGE , PAGE} from '../../config/config';
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
  backToPage() {
    this.router.navigate(['/section']);
     this.appServiceObject.currentPageName = PAGE.MAINPAGE;
  }

  readDataFromLocalStorage() {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGEKEYS.PROFESSIONAL));
    this.professionalInfoOfEmployees = dataFromLocalStorage !== null ? dataFromLocalStorage : [];
  }
  openModal() {
    this.isShowProfessionalModal = true;
  }
  clearFields() {
    this.professionalInfoModel = new ProfessionalSectionModel();
    this.isDisableSubmitButton = false;
  }

  closeModel() {
    this.isShowProfessionalModal = false;
  }

  submitProfessionalInfo() {
    if(!_.isEmpty(this.professionalInfoModel) && this.isDisableSubmitButton) {
      this.professionalInfoModel.experience = this.professionalInfoModel.experience === null ? MESSAGE.NOTPROVIDED : this.professionalInfoModel.experience;
      this.professionalInfoOfEmployees.push(this.professionalInfoModel);
      localStorage.setItem(LOCALSTORAGEKEYS.PROFESSIONAL, JSON.stringify(this.professionalInfoOfEmployees));
    }
    this.isShowProfessionalModal = false;
    this.clearFields();
  }

  showHideSubmitButton() {
    if(this.professionalInfoModel.employeeId.length !== 0 && this.professionalInfoModel.employeeName.length !== 0 && this.professionalInfoModel.gender !== "-1" && this.professionalInfoModel.joiningDate !== null ) {
      this.isDisableSubmitButton = true;
    } else {
      this.isDisableSubmitButton = false;
    }
  }
}
