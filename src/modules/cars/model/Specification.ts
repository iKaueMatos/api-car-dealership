import { v4 as uuidV4 } from 'uuid';

class Specification {
    specificationId?: string;
    name: string;
    description: string;
    created_dt?: Date;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.specificationId = uuidV4();
        this.created_dt = new Date();
    }
}

export { Specification };