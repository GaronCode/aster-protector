import {BaseResource} from "@/game/interfaces/BaseResource";

export class IceResource extends BaseResource{
    constructor({amount}) {
        super({
            amount, name: 'Лёд'
        });
    }
}
