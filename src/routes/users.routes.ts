import Router from 'express'
import multer from 'multer';
import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/account/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoutes = Router()

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes }