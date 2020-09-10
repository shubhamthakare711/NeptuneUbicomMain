export interface IPersonalSection {
    firstName: string;
    lastName: string;
    gender: string;
    birthdate: Date;  
    address: string;
}

export class PersonalSectionModel implements IPersonalSection {
    firstName = '';
    lastName = '';
    gender =  '-1';
    birthdate = null;  
    address = '';
}