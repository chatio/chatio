'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);

  // app.io.of('/')
  app.io.route('chat', app.io.controllers.chat.index);
   // app.io.of('/chat')
  app.io.of('/chat').route('chat', app.io.controllers.chat.index);
};
