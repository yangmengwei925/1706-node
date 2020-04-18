'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login/login', controller.login.login)
  router.post('/register/re', controller.register.register);
  router.get('/list/list', controller.list.index);
  router.delete('/list/delete',controller.list.delete);
  router.put('/list/edit',controller.list.edit);
};
