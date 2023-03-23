import { Module } from "@nestjs/common";
import {GameGateway} from "./game.gateway";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Game} from "./game.entity";
import {GameService} from "./game.service";
import {UserModule} from "../users/user.module";

@Module({
    controllers: [],
    providers: [GameService, GameGateway],
    imports: [
        TypeOrmModule.forFeature([Game]),
        UserModule,
    ],
})
export class GameModule {}
