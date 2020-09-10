import {Injectable} from '@angular/core';

@Injectable() 
export class AppService {
    currentPageName: string;
    constructor() {
    this.currentPageName = 'MainPage';
    }
}