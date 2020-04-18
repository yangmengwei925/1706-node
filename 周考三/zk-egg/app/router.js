'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login/login', controller.login.index);
  router.get('/user/user',controller.user.index)
  router.put('/user/edit',controller.user.edit)
};
