import {BaseResource} from "@/game/interfaces/BaseResource";

export class SiliciumResource extends BaseResource{
    constructor({amount}) {
        super({
            amount, name: 'Кремний'
        });
    }
}
