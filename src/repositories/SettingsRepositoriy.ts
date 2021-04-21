import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entitites/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };