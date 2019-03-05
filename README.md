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

run mongodb server with
    sudo service mongod start

Default admin user is created in server/boot/script.js
If you want to restart the server, think about comment all the script to avoid create twice the user or crash the app.

database model 

  card :
  {
    "word": string required,
    "internationalSpelling": string required,
    "language": string required
    "translations": [{
                      "language": string required, 
                      "word": string required, 
                      "internationalSpelling": string required,
                      "sentences": [{"cardLanguageSentence": string, "translatedSentence": string}],
                      "rank": number
                    }]
    "vivibility": string  (this field is to differenciate cards validated by admin and cards add by a customer for his own dictionnary)
  }

  cardList :
  {	
    "language": string
    "name" : string, required
    "exercices" : [{exerciseName: string, level: integer, rank: integer}] required,
    "comments" : string
  }

  user:
  {
    "name": string required,
    "email": string required,
    "username": string required,
    "password": string required
  }