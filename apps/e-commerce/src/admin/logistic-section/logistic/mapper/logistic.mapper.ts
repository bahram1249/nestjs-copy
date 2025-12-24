import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from 'automapper-nestjs';
import { LogisticDto } from '../dto';
import { Mapper, createMap, forMember, ignore } from 'automapper-core';
import { ECLogistic } from '@rahino/localdatabase/models';

@Injectable()
export class LogisticProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        LogisticDto,
        ECLogistic,
        forMember((dest) => dest.id, ignore()),
      );
    };
  }
}
