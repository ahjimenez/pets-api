import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './types/dog.type';
import { DogDto, UpdateDogDto } from './types/dog.dto';

@Controller('dogs')
export class DogsController {

    constructor(private readonly dogsService: DogsService) {}

    @Get()
    indexedDB() {
        return this.dogsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Dog {
        return this.dogsService.findOne(+id);
    }
    
    @Post()
    create(@Body() creatadogDto: DogDto) {
        return this.dogsService.create(creatadogDto);
    }

     @Patch(':id')
    update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
        return this.dogsService.update(+id, updateDogDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.dogsService.delete(+id);
    }
    }   
