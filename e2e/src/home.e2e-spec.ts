import { browser, element, by , protractor} from 'protractor'

describe('Home Page', ()=>{

    it('Should navigate to user profile', async()=>{
        await browser.get(`${browser.baseUrl}/#/user`);
        const title = await browser.getTitle();
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