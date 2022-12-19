
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with choices', async () => {
    const makeRobotDisplayCard = await driver.findElement(By.id('see-all'))
    const displayed = await makeRobotDisplayCard.isDisplayed()
    expect(displayed).toBe(true)
})

test('“Add to Duo” button displays player-duo', async () => {
    const playerDuo = await driver.findElement(By.id('playerDuo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})