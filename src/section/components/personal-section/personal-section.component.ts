import { Component, OnInit } from '@angular/core';
 // import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PersonalSectionModel } from 'src/section/model/personal-section.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-personal-section',
  templateUrl: './personal-section.component.html',
  styleUrls: ['./personal-section.component.scss']
})
export class PersonalSectionComponent implements OnInit {
  isShowPersonalModal: boolean;
  isShowSubmitButton: boolean;
  personalInfo: PersonalSectionModel;
  personalInfoOfEmployees : PersonalSectionModel[] = [];
  constructor() { 
    this.isShowPersonalModal= false;
    this.isShowSubmitButton = false;
    this.personalInfo = new PersonalSectionModel();
    this.personalInfoOfEmployees = new Array<PersonalSectionModel>();
  }

  ngOnInit(): void {
  }


  /**
   * method to open bootstrap modal
   */
  openModal() {
    this.isShowPersonalModal = true;
  }
  clearFields() {
    this.personalInfo = new PersonalSectionModel();
    this.isShowSubmitButton = false;
  }

  closeModel() {
    this.isShowPersonalModal = false;
  }
  
  showHideSubmitButton() {
    if(this.personalInfo.firstName !== "" && this.personalInfo.lastName !== "" && this.personalInfo.gender !== "-1" && this.personalInfo.birthdate !== null ) {
      this.isShowSubmitButton = true;
    } else {
      this.isShowSubmitButton = false;
    }
  }
 
  submit() {
    if(!_.isEmpty(this.personalInfo) && this.isShowSubmitButton) {
      this.personalInfoOfEmployees.push(this.personalInfo);
      this.isShowPersonalModal = false;
      this.clearFields();
    } else {
      this.isShowSubmitButton = false;
    }
   
  }



}
