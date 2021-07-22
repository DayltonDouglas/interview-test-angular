import { browser} from 'protractor';

export class HomePage{

    navigateTo(){
        return browser.get(`${browser.baseUrl}/#/user`);
    }
    getWindowTitle(){
        return browser.getTitle();
    }
}