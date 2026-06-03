import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CobrosDto } from './dto/cobros.dto'; 

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  // POST /services/cobros — FOR
  @Post('cobros')
  cobros(@Body() cobrosDto: CobrosDto) {
    return this.servicesService.cobros(cobrosDto);
  }

  @Get('clases')
  clases(
    @Query('minutos_disponibles') minutos: string,
    @Query('duraciones') duraciones: string,
  ) {
    // Maneja casos en que el query llegue vacío o mal formateado
    const minutosNum = parseInt(minutos, 10) || 0;
    const duracionesStr = duraciones || '';
    
    return this.servicesService.clases(minutosNum, duracionesStr);
  }
}