import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './types/cat.type';
import { CatDto, UpdateCatDto } from './types/cat.dto';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    indexedDB() {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Cat { 
        return this.catsService.findOne(+id);
    }

    @Post()
    create(@Body() creatacatDto: CatDto) {
        return this.catsService.create(creatacatDto);
    }

     @Patch(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return this.catsService.update(+id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.catsService.delete(+id);
    }
    }   
