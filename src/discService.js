class DiscService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDiscs(){

        fetch(`${this.endpoint}/discs`)
        .then(resp => resp.json())
        .then(discs => {
            debugger
        })

    }
    
 
}