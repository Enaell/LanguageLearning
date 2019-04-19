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

  word : HasMany translation (and EmbedsMany translation)
  {
    "spelling": string required,
    "internationalSpelling": string required,
    "language": string required
    "translations": [{
                      "word": string required,
                      "internationalSpelling": string required,
                      "language": string required
                      "sentences": [{"cardLanguageSentence": string, "translatedSentence": string}],
                      "rank": number
                    }]
    "comments": string
    "validated": boolean (this field is to differenciate cards validated by admin from others)
    "visibility": integer (rank of visibility wanted by the card owner)
  }

  translation: BelongsTo (or word EmbedsMany translation)  
  {
    "word": string required,
    "internationalSpelling": string required,
    "language": string required
    "sentences": [{"cardLanguageSentence": string, "translatedSentence": string}],
    "rank": number
  }

  wordList : HasMany word
  {	
    "language": string
    "name" : string, required
    "subject": string,
    "level": number,
    "rank": number,
    "comments" : string
  }

  user:
  {
    "name": string required,
    "email": string required,
    "username": string required,
    "password": string required
  }