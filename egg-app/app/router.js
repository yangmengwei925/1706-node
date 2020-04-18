'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login/login', controller.login.index);
  router.get('/tab/tab',controller.tab.index)

  router.get('/group/list',controller.group.list)
  
  router.post('/group/add',controller.group.add)
  router.post('/group/edit',controller.group.edit)
  router.post('/group/delete',controller.group.delete)
  router.post('/group/search',controller.group.search)

  router.get('/grade/list',controller.grade.list)
  router.post('/grade/add',controller.grade.add)
  router.put('/grade/edit',controller.grade.edit)
  router.delete('/grade/delete',controller.grade.delete)

  router.get('/grade/bin',controller.grade.bin)

  router.get('/role/list',controller.role.list)
};
