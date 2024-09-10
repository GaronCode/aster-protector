import {ref} from "vue";

export class BaseResource {
    name = 'BaseResource';
    img = "./img/bullet.png";

    #amount = 0;
    #refAmount= ref(0);

    constructor({
        name, imgUrl, amount,
                }) {

        this.name = name;

        if (amount) this.amount = amount;
        if (imgUrl) this.imgUrl = imgUrl;


    }

    get amount() {
        return this.#amount;
    }

    set amount(val) {
        if (val >= 0) {
            this.#amount = val;
            this.#refAmount.value = val;
        } else {
            throw {message: 'must be positive number!', name: 'must be positive'}
        }

    }

    take(val) {
        if (val < 0) throw {message: 'must be positive number!', name: 'must be positive'}
        try {
            this.amount -= val;
        } catch (e) {
            throw {message: 'not enough resources!', name: 'not enough'}
        }
    }

     put(val) {
         if (val < 0) throw {message: 'must be positive number!', name: 'must be positive'}
         this.amount += val;
     }

     getRef() {
        return this.#refAmount;
     }
}
