import { Injectable } from '@nestjs/common';
import { Dog } from './types/dog.type';
import { create } from 'domain';
import { DogDto, UpdateDogDto } from './types/dog.dto';


@Injectable()
export class DogsService {
   
    #dogs: Dog[];

constructor() {
    this.#dogs = [
        {
            id: 1,
            name: 'Spike',
            color: 'Cafe',
        },
];
}

findAll(): Dog[] {
    return this.#dogs;
}

create(dog: DogDto) {
    const newDog = {
        id: this.#dogs.length + 1,
        ...dog,
    };
    this.#dogs.push(newDog);
    return newDog;
}

update(id: number, updateDogDto: UpdateDogDto): Dog {
        const index = this.#dogs.findIndex(dog => dog.id === id);
        this.#dogs[index] = { ...this.#dogs[index], ...updateDogDto };
        return this.#dogs[index];
    }

    delete(id: number): void {
        this.#dogs = this.#dogs.filter(dog => dog.id !== id);
    }
}