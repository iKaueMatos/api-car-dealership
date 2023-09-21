import { v4 as uuidV4 } from 'uuid';

class CategoryClass {
    categoryId?: string;
    name: string;
    description: string;
    created_dt?: Date;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.categoryId = uuidV4();
        this.created_dt = new Date();
    }
}

export default CategoryClass;
