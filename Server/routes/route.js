import express,{Router} from 'express';

import { addUser,getUsers,getUser,editUser,deleteUser,logUser } from '../controller/user_controller.js';

const router = express.Router();

router.post('/add',addUser)
router.get('/all',getUsers)
router.get("/:id",getUser)
router.put("/:id",editUser)
router.delete("/:id",deleteUser)
router.post("/login",logUser)

export default router;