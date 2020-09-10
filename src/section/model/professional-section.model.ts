export interface IProfessionalSection {
    employeeId: number;
    employeeName: string;
    gender: string;
    joiningDate: Date;  
    experience: number;
}

export class ProfessionalSectionModel implements IProfessionalSection {
    employeeId = null;
    employeeName = '';
    gender =  '-1';
    joiningDate = null; 
    experience = null;
}