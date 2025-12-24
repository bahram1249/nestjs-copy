import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AdminLogisticController } from './admin-logistic.controller';
import { LogisticService } from './admin-logistic.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permission, User } from '@rahino/database';
import { LogisticProfile } from './mapper';
import { UserRoleModule } from '@rahino/core/admin/user-role/user-role.module';
import { ECLogistic, ECLogisticUser } from '@rahino/localdatabase/models';
import { LocalizationModule } from 'apps/main/src/common/localization';
import { SessionModule } from '@rahino/ecommerce/user/session/session.module';
import { LogisticUserRoleHandlerModule } from '../logistic-user-role-handler/logistic-user-role-handler.module';

@Module({
  imports: [
    SessionModule,
    UserRoleModule,
    SequelizeModule.forFeature([User, Permission, ECLogistic, ECLogisticUser]),
    SequelizeModule,
    LocalizationModule,
    LogisticUserRoleHandlerModule,
  ],
  controllers: [AdminLogisticController],
  providers: [LogisticService, LogisticProfile],
})
export class AdminLogisticModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
