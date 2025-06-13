import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { create } from 'domain';
import { CatDto } from './types/cat.dto';
import { UpdateCatDto } from './types/cat.dto';


@Injectable()
export class CatsService {
   
    #cats: Cat[];

constructor() {
    this.#cats = [
        {
            id: 1,
            name: 'Tom',
            color: 'gris',
        },
];
}

findAll(): Cat[] {
    return this.#cats;
}

create(cat: CatDto) {
    const newCat = {
        id: this.#cats.length + 1,
        ...cat,
    };
    this.#cats.push(newCat);
    return newCat;
}

update(id: number, updateCatDto: UpdateCatDto): Cat {
        const index = this.#cats.findIndex(cat => cat.id === id);
        this.#cats[index] = { ...this.#cats[index], ...updateCatDto };
        return this.#cats[index];
    }

    delete(id: number): void {
        this.#cats = this.#cats.filter(cat => cat.id !== id);
    }
}