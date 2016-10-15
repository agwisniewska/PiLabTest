describe('zadanie-testowe test', function () {
    it('should have icons', function () {
        browser.get('http://127.0.0.1:8080/#/breadcrumbs/accounts/');
			expect(element(by.className('fa-briefcase')).isDisplayed()).toBeTruthy();
			expect(element(by.className('fa-phone')).isDisplayed()).toBeTruthy();
			expect(element(by.className('fa-user')).isDisplayed()).toBeTruthy();
    });

    it('should ng-click show new icon', function () {
		element(by.className('btn-default')).click();
		expect(element(by.className('fa-info')).isDisplayed()).toBeTruthy();
    

       
    })
});