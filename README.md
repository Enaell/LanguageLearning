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

  word : HasMany translation
  {
    "spelling": string required,
    "internationalSpelling": string required,
    "language": string required,
    "subject": [string]
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

  wordList : HasMany word
  {	
    "language": string
    "name" : string, required
    "subject": [string],
    "level": number,
    "rank": number,
    "comments" : string
  }

  customer:
  {
    "name": string required,
    "email": string required,
    "username": string required,
    "password": string required
  }


word examples : 
{
  "name": "吃",
  "globalName": "chi",
  "language": "cn",
  "subject": ["dailyLife", "general"],
  "translations": [
    {
      "name": "manger",
      "globalName": "manger",
      "language": "fr",
      "sentences": [{"sentence": "我吃", "translatedSentence": "je mange"}],
      "rank": 0
    }
  ],
  "level": 0,
  "validated": false,
  "visibility": 0
},
{
  "name": "喝",
  "globalName": "he",
  "language": "cn",
  "subject": ["dailyLife", "general"]
  "translations": [
    {
      "name": "boire",
      "globalName": "boire",
      "language": "fr",
      "sentences": [{"sentence": "你渴那喝", "translatedSentence": "si tu as soif, bois"}],
      "rank": 0
    }
  ],
  "level": 0,
  "validated": false,
  "visibility": 0
},
{
  "name": "天",
  "globalName": "tian",
  "language": "cn",
  "subject": ["dailyLife", "general", "time"],
  "translations": [
    {
      "name": "jour",
      "globalName": "jour",
      "language": "fr",
      "sentences": [{"sentence": "还有三天后就是我的生日", "translatedSentence": "encore trois jours avant mon anniversaire"}],
      "rank": 0
    },
    {
      name": "ciel",
      "globalName": "ciel",
      "language": "fr",
      "sentences": [{"sentence": "天的儿子", "translatedSentence": "le fils du ciel"}],
      "rank": 0
    }
  ],
  "level": 0,
  "validated": false,
  "visibility": 0
},
{
  "name": "茶",
  "globalName": "cha",
  "language": "cn",
  "subject": ["food"],
  "translations": [
    {
      "name": "thé",
      "globalName": "thé",
      "language": "fr",
      "sentences": [{"sentence": "我要喝茶", "translatedSentence": "j\'ai envie de boire du thé"}],
      "rank": 0
    }
  ],
  "level": 0,
  "validated": false,
  "visibility": 0
},