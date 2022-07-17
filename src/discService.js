class DiscService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDiscs(){

        fetch(`${this.endpoint}/discs`)
        .then(resp => resp.json())
        .then(discs => {
            for (const disc of discs){
                const d = new Disc(disc)
                d.slapOnDom()
            }
        })

    }

    createDisc(){
        const disc = {
            brand: document.getElementById('brand').value,
            name: document.getElementById('name').value,
            speed: document.getElementById('speed').value,
            glide: document.getElementById('glide').value,
            turn: document.getElementById('turn').value,
            fade: document.getElementById('fade').value,
            plastic: document.getElementById('plastic').value,
            weight: document.getElementById('weight').value,
            bag_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(disc)
        }
        
        fetch(`${this.endpoint}/discs`, configObj)
        .then(resp => resp.json())
        .then(disc => {
            const d = new Disc(disc)
            d.slapOnDom()
        })
    }

    deleteDisc(id){
        fetch(`${this.endpoint}/discs/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(resp => resp.json)
        .then(json => {alert(json.message)})
    }
    
 
}