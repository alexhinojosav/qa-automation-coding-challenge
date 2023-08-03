// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom/extend-expect';
const assert = require('assert');
const { Builder, By, Key } = require("selenium-webdriver");

async function Validation2HappyPath() {
    const driver = await new Builder().forBrowser("MicrosoftEdge").build();
    until=driver.until;
    const URL = "http://localhost:3000";
    await driver.get(URL);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/section[1]'));
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/form/div/label'));
    await driver.findElement(By.id('username'));
    await driver.sleep(1000);
    await driver.findElement(By.id('username')).sendKeys('123', Key.RETURN);
    await driver.sleep(1000);
    let hi= By.xpath('/html/body/div/div/main/section[1]/p/strong');
    let success= await driver.findElement(hi).getText();
    console.log(success);
    assert.strictEqual(success, "Success!");  

}
Validation2HappyPath();

async function Validation5notFound() {
    const driver = await new Builder().forBrowser("MicrosoftEdge").build();
    const URL = "http://localhost:3000";
    await driver.get(URL);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/section[1]'));
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/form/div/label'));
    await driver.findElement(By.id('username'));
    await driver.sleep(1000);
    await driver.findElement(By.id('username')).sendKeys('@--=+', Key.RETURN);
    await driver.sleep(1000);
    let other= By.xpath('/html/body/div/div/main/section[1]/p/strong');
    let fail= await driver.findElement(other).getText();
    console.log(fail);
    assert.strictEqual(fail, "Github user not found");

}

Validation5notFound();
