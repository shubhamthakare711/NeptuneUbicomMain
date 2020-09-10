import {Injectable} from '@angular/core';
import { PAGE } from '../section/config/config'

@Injectable() 
export class AppService {
    currentPageName: string;
    constructor() {
    this.currentPageName = PAGE.MAINPAGE; // variable used to store the name of currently selected page.
    }
}