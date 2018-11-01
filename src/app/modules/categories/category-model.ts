import { Product } from '../products/product-model';

export class Image {
    constructor(public image: string) {
        this.image = image;
    }
}

export class Category {
    constructor(public id: number, public name: string, public description: string, public images: Image[], public products: Product[]) { }
}
