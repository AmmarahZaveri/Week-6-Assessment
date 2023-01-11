
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})


test('by clciking and adding to duo',async()=>{
    const player_duo=  driver.findElement(By.id('player-duo'))
    await driver.sleep(2000)
    const displayed = await player_duo.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
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

test('the draw button returns div',async () => {
    await driver.findElement(By.id("draw")).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
    
})
