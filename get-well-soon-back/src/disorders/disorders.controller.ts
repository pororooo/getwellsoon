import { Controller, Get,Post,Put,Param,Body, ParseIntPipe } from '@nestjs/common';
import { CreateDisordersDto } from 'src/dto/createDisorder.dto';
import { UpdateDisordersDto } from 'src/dto/updateDisorders.dto';
import { DisordersService } from './disorders.service';
import { CreateAdvicesDto } from 'src/dto/createAdvices.dto';
import { CreateAppsDto } from 'src/dto/createApps.dto';
import { CreateArticlesDto } from 'src/dto/createArticles.dto';
import { CreateClinicsDto } from 'src/dto/createClinics.dto';
import { CreatePodcastsDto } from 'src/dto/createPodcasts.dto';
import { CreatePsychiatristsDto } from 'src/dto/createPsychiatrists.dto';
import { CreatePsychologistDto } from 'src/dto/createPsychologist.dto';
import { CreateTestsDto } from 'src/dto/createTests.dto';

@Controller('disorders')
export class DisordersController {
    constructor(private disordersService: DisordersService) {}

    @Get()   
    getDisorders(){
        return this.disordersService.findDisorders();
    }

    @Post()
    createDisorders(@Body() createDisordersDto: CreateDisordersDto){
       return this.disordersService.createDisorders(createDisordersDto);
    }

    @Put(':id')
    async updateDisordersById(
        @Param('id',ParseIntPipe)id:number, 
        @Body() updateDisordersDto: UpdateDisordersDto
    ){
        await this.disordersService.updateDisorders(id, updateDisordersDto);
    }

    @Post(':id/name')
    CreateAdvices(
    @Param('id', ParseIntPipe) id: number,
    @Body() createAdvicesDto: CreateAdvicesDto,){
        return this.disordersService.CreateAdvices(id, createAdvicesDto)
    }

    @Post(':id/name')
    CreateApps(
        @Param('id', ParseIntPipe) id: number,
        @Body() createAppsDto: CreateAppsDto,){
            return this.disordersService.CreateApps(id, createAppsDto)
        }

    @Post(':id/name')
    CreateArticles(
            @Param('id', ParseIntPipe) id: number,
            @Body() createArticlesDto: CreateArticlesDto,){
                return this.disordersService.CreateArticles(id, createArticlesDto)
            }

    @Post(':id/name')
    CreateClinics(
            @Param('id', ParseIntPipe) id: number,
            @Body() createClinicsDto: CreateClinicsDto,){
                return this.disordersService.CreateClinics(id, createClinicsDto)
            }

@Post(':id/name')
    CreatePodcasts(
            @Param('id', ParseIntPipe) id: number,
            @Body() createPodcastsDto: CreatePodcastsDto,){
                return this.disordersService.CreatePodcasts(id, createPodcastsDto)
            }
@Post(':id/name')
    CreatePsychiatrists(
            @Param('id', ParseIntPipe) id: number,
            @Body() createPsychiatristsDto: CreatePsychiatristsDto,){
                return this.disordersService.CreatePsychiatrists(id, createPsychiatristsDto)
            }

@Post(':id/name')
    CreatePsychologist(
            @Param('id', ParseIntPipe) id: number,
            @Body() createPsychologistDto: CreatePsychologistDto,){
                return this.disordersService.CreatePsychologist(id, createPsychologistDto)
            }
            
@Post(':id/name')
    CreateTests(
            @Param('id', ParseIntPipe) id: number,
            @Body() createTestsDto: CreateTestsDto,){
                return this.disordersService.CreateTests(id, createTestsDto)
            }
}
