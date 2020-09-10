import { Component, OnInit } from '@angular/core';
import { PersonalSectionModel } from 'src/section/model/personal-section.model';
import { GENDERS , LOCALSTORAGEKEYS } from '../../config/config'
import * as _ from 'lodash';
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
  personalInfoOfEmployees : PersonalSectionModel[] = [];
  constructor() { 
    this.isShowPersonalModal= false;
    this.isDisableSubmitButton = false;
    this.personalInfo = new PersonalSectionModel();
    this.personalInfoOfEmployees = new Array<PersonalSectionModel>();
  }

  ngOnInit(): void {
    this.readDataFromLocalStorage();
  }


  readDataFromLocalStorage() {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGEKEYS.PERSONAL));
    this.personalInfoOfEmployees = dataFromLocalStorage !== null ? dataFromLocalStorage : [];
  }
  /**
   * method to open bootstrap modal
   */
  openModal() {
    this.isShowPersonalModal = true;
  }
  clearFields() {
    this.personalInfo = new PersonalSectionModel();
    this.isDisableSubmitButton = false;
  }

  closeModel() {
    this.isShowPersonalModal = false;
    this.clearFields();
  }
  
  showHideSubmitButton() {
    if(this.personalInfo.firstName.length !== 0 && this.personalInfo.lastName.length !== 0 && this.personalInfo.gender !== "-1" && this.personalInfo.birthdate !== null ) {
      this.isDisableSubmitButton = true;
    } else {
      this.isDisableSubmitButton = false;
    }
  }
 
  submit() {
    if(!_.isEmpty(this.personalInfo) && this.isDisableSubmitButton) {
      this.personalInfoOfEmployees.push(this.personalInfo);
      localStorage.setItem(LOCALSTORAGEKEYS.PERSONAL, JSON.stringify(this.personalInfoOfEmployees));
      this.isShowPersonalModal = false;
      this.clearFields();
    } else {
      this.isDisableSubmitButton = false;
    }
   
  }



}
