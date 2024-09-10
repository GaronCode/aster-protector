import {BaseResource} from "@/game/interfaces/BaseResource";

export class StoneResource extends BaseResource{
    constructor({amount}) {
        super({
            amount, name: 'Камень'
        });
    }
}
