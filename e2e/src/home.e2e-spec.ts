
import { browser, element, by , protractor, logging} from 'protractor'
import { HomePage } from './home.po';

describe('Home Page', ()=>{

    let homePage: HomePage;


    afterEach(async()=>{
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    })
    beforeEach(async()=>{
        homePage = new HomePage;
        await homePage.navigateTo();
    })
    it('Should navigate to user profile', async()=>{
        const title = await homePage.getWindowTitle();
        expect(title).toEqual('Timeline');
    })
    it('Should display a list of photos', async()=>{
        await browser.get(`${browser.baseUrl}/#/user`);
        const list= element.all(by.css('profile-thumbnail'));
        const photoListSize = await list.count();
        expect(photoListSize).toBeGreaterThan(0);
    });
    it('Should navigate to photo detail when photo navigation is triggered', async()=>{
        await browser.get(`${browser.baseUrl}/#/user`);
        const firstElement = element.all(by.css('profile-thumbnail')).first();
        await firstElement.sendKeys(protractor.Key.ENTER);
        const title = await browser.getTitle();
        expect(title).toBe('Photo detail');
    });
});