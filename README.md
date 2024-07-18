# Pfe
-after you clonning this repo you need to create a mysql database caalled "pos" 
-after that create a .env file in the root of the frontEnd folder  and another one in the root of the folder backEnd
-open the terminal in the frontEnd folder and tap npm i do the same thing in the backEnd folder
-to test the app in your android phone you need to install expo go sdk 50 (because the library expo camera was depricated for the sdk 51 )
-run the server with the command npm run dev and dicomment this line of code in the models folder // connection.sync({ force: true }); and save now you create your tables in the mysql database using sequelize ORM
-after that dicomment the same line // connection.sync({ force: true }); and save again  
