import { NgModule } from '@angular/core';
import { MovieRepository } from './movie.repository';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    MovieRepository,
    StaticDataSource,
    //{ provide: StaticDataSource, useClass: RestDataSource },
  ],
})
export class ModelModule {}
