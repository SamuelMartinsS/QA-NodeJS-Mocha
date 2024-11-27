const { Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();

//describe block
describe("add a wrong name", function () {
  //it block
  it("successfully adds 'JOHN' != 'SELENIUM'", async function () {
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to the application
    await driver.get("file:///C:/Users/ssama/Downloads/lista-pai-natal.html");

    //add a element
    await driver.findElement(By.id("nome-prenda")).sendKeys("JOHN");
    await driver.findElement(By.id("adicionar")).sendKeys(Key.RETURN);

    //assert
    let inputText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    inputText.should.not.equal("SELENIUM");

    //close the browser
    await driver.quit();
  });
});
