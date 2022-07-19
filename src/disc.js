class Disc {
    // remember objects
    static all = [] //will need separate method for deleting after remembered
    static discContainer = document.getElementById('disc-container')
    static discForm = document.getElementById('form-container')


    constructor({id, brand, name, speed, glide, turn, fade, plastic, weight,bag_id}){
        this.id = id,
        this.brand = brand,
        this.name = name,
        this.speed = speed,
        this.glide = glide,
        this.turn = turn,
        this.fade = fade,
        this.plastic = plastic,
        this.weight = weight,
        this.bag_id = bag_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `disc-${this.id}`
        this.element.addEventListener('click', this.handleClick)


        Disc.all.push(this)
    }


    discHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
            <p>${this.brand}</p>
        </div>
        <button id="delete=bttn">Delete</button>
        <br>
        <br>
        `
        return this.element
    }

    slapOnDom(){
        Disc.discContainer.append(this.discHTML())
    }

    static renderForm(){
        Disc.discForm.innerHTML += `
        <form id="new-disc-form">
            Brand: <input type="text" id="brand"> <br>
            Name: <input type="text" id="name"> <br>
            Speed: <input type="text" id="speed"> <br>
            Glide: <input type="text" id="glide"> <br>
            Turn: <input type="text" id="turn"> <br>
            Fade: <input type="text" id="fade"> <br>
            Plastic: <input type="text" id="plastic"> <br>
            Weight: <input type="text" id="weight"> <br>
            <input type="submit" id="create">
        </form>
        `
    }

    handleClick = () =>{
        if (event.target.innerText == 'Delete'){
            discService.deleteDisc(this.id)
        }
    }

}