import{ Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from './repositories/SettingsRepositoriy';

const routes = Router();

routes.post("/settings", async (req, res) => {
  const { chat, username } = req.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  //criar a representação
  const settings = settingsRepository.create({
    chat,
    username
  })

  //salvar o objeto
  await settingsRepository.save(settings);

  return res.json(settings);
})

export { routes }; 