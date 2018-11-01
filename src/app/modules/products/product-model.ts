import { Image } from '../categories/category-model';
export class Specification {
    constructor(public name: string, public value: string) { }
}

export class Product {
    // tslint:disable-next-line:max-line-length
    constructor(public id: number,
        public catId: number,
        public name: string,
        public description: string, public images: Image[],
        public specifications: Specification[]) { }
}
