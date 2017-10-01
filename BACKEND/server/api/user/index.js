'use strict';

import express from 'express';
import controller from './user.controller';
import auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', auth.hasRole('administrador'), controller.index);
router.delete('/:id',auth.hasRole('administrador'), controller.destroy);
router.get('/me',auth.hasRole('administrador'), controller.me);
router.put('/:id/password',auth.hasRole('administrador'), controller.changePassword);
router.put('/:id',auth.hasRole('administrador'), controller.update);
router.get('/:id',auth.hasRole('administrador'), controller.show);
router.get('/list',auth.hasRole('administrador'), controller.index);
router.post('/',auth.hasRole('administrador'), controller.create);

module.exports = router;
