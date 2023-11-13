/*File: index.server.controller.js
Student's Name: Katialy Ashley
Student ID: 301273661
Date: 03/10/2023
*/
exports.render = function (req, res) {
   if (req.session.lastVisit) {
      console.log(req.session.lastVisit);
   }
   req.session.lastVisit = new Date();

   res.render('index', {
      title: 'Hello World'
   });
}; 
