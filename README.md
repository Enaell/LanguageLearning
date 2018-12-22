you can use Robomongo (now call) Robot 3T to see and update mongodb database 

server address : 0.0.0.0:3000
      '/status' route that returns server status
      '/explorer' route that show api requests

client address : 0.0.0.0:3001


package.json scripts
      	    "lint": "eslint .",
	    "prestart": "npm run --prefix client build",
	    "start": "node .",
	    "start-dev": "concurrently \"nodemon .\" \"npm start --prefix client\"",
	    "postinstall": "npm install --prefix client",
	    "posttest": "npm run lint && nsp check"

to run devs servers
   npm run start-dev