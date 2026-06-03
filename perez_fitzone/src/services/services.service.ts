import { Injectable } from '@nestjs/common';
import { CobrosDto } from './dto/cobros.dto';

export interface DetalleCobro {
  nombre: string;
  recargo_pct: number;
  total_cobro: number;
}

@Injectable()
export class ServicesService {

  cobros(cobrosDto: CobrosDto) {
    let total_cobro = 0;
    const detalle: DetalleCobro[] = [];

    for (const socio of cobrosDto.socios) {
      let recargo_pct: number;

      if (socio.dias_atraso === 0)        recargo_pct = 0;
      else if (socio.dias_atraso <= 7)    recargo_pct = 5;
      else if (socio.dias_atraso <= 15)   recargo_pct = 10;
      else                                recargo_pct = 20;

      // Arreglado: Casteamos temporalmente a 'any' para evitar que TypeScript bloquee la compilación por la propiedad 'plan'
      const socioAny = socio as any;
      const cuota = socioAny.plan?.precio ? Number(socioAny.plan.precio) : 0;
      
      const recargo     = +(cuota * recargo_pct / 100).toFixed(2);
      const cobro_socio = +(cuota + recargo).toFixed(2);
      total_cobro       = +(total_cobro + cobro_socio).toFixed(2);

      detalle.push({
        nombre:      socio.nombre,
        recargo_pct,
        total_cobro: cobro_socio,
      });
    }

    return {
      total_socios: detalle.length,
      total_cobro,
      detalle,
    };
  }

  clases(minutos_disponibles: number, duraciones: string) {
    const lista = duraciones.split(',').map((d) => parseInt(d.trim(), 10));

    let acumulado = 0;
    let indice    = 0;
    const agendadas: number[] = [];

    while (indice < lista.length) {
      const duracion_actual = lista[indice];

      if (acumulado + duracion_actual <= minutos_disponibles) {
        acumulado += duracion_actual;
        agendadas.push(duracion_actual);
        indice++; 
      } else {
        break; 
      }
    }

    return {
      clases_agendadas: agendadas.length,
      minutos_libres:   minutos_disponibles - acumulado,
      detalle:          agendadas,
    };
  }

}