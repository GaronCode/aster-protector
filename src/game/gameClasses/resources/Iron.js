import {BaseResource} from "@/game/interfaces/BaseResource";

export class IronResource extends BaseResource{
    constructor({amount}) {
        super({
            amount, name: 'Железо'
        });
    }
}
