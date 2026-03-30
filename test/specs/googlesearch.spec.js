describe('Google Search', ()=> {

    it('First Test', async ()=>{
        await browser.url('https://google.com')
        await browser.pause(2000)
        await $('//*[@class="QS5gu sy4vM"]').click()
        const searchbar = await $('#APjFqb')
        await searchbar.setValue('Gaurav Kumar Gupta')
        await browser.keys('Enter')
        await browser.pause(20000)
    })
})