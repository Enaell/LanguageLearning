// module.exports = function(app) {
//   var User = app.models.customer;
//   var Role = app.models.Role;
//   var RoleMapping = app.models.RoleMapping;


//   User.create([
//     {username: 'admin', email: 'admin@admin.com', password: 'admin', name:'admin'},
//     {username: 'enael', email: 'orelienmartin@hotmail.fr', password: 'password', name:'Enael'},
//     {username: 'mordwen', email: 'orelienmartin@gmail.com', password: 'password', name: 'Mordwenss'}
//   ], function(err, users) {
//     if (err) throw(err);

//     Role.find({where: {name: 'admin'}}, function(err, role) {
//       if (err) {return console.log(err);}
    
//       console.log('ROLE :', role[0])

//       RoleMapping.create({
//         principalType: "USER",
//         principalId: users[2].id,
//         roleId: role[0].id
//       }, function(err, roleMapping) {
    
//         if (err) {return console.log(err);}
    
//         console.log('User assigned RoleID ' + role[0].id);
//         console.log(roleMapping);
    
//       });
    
//     });

//   });
// };

