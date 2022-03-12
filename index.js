const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ["BMV"]

    const list = $('#list')
    const input = $('#input')
    const submit = $('#submit')

    return{
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                ${car}  <span class="delete" data-index"${index}">x</span>
                </li>
            `).join('')

            list.innerHTML = html


        },
        hanleDelete(e) {
            const deleteBtn = e.target.closest('.delete')

            if(deleteBtn){  
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }

        },
        init() {

            submit.onclick = () => {
                const carValue = input.value
                this.add(carValue)
                this.render()
                
                input.value = null
                input.focus()
            }

            list.onclick = this.hanleDelete.bind(this)

            this.render()

        }
    }
})()

app.init()