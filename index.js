const base_url = "http://127.0.0.1:3000"
const discService = new DiscService(base_url)

Disc.discForm.addEventListener('submit', handleSubmit)

discService.getDiscs()
Disc.renderForm()


function handleSubmit(){
    event.preventDefault()
    discService.createDisc()
    event.target.reset()
}
