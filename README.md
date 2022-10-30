# Serverless Framework Node Express API on AWS

This simple app demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the traditional Serverless Framework.  

## Usage

  

### Deployment

  

Install dependencies with:

```

npm install

```
Create .env with MongoDB Atlas URL:

`cp .env.example .env`

Seed the database
`node utils/seed.js`  

and then deploy with:

  

```

serverless deploy

```

  

After running deploy, you should see output similar to:

  

```bash
Deploying aws-mongoose-express to stage dev (us-east-1)

✔ Service deployed to stack aws-mongoose-express-dev (835s)

endpoint: GET - https://prji261hli.execute-api.us-east-1.amazonaws.com/users
functions:
  api: aws-mongoose-express-dev-api (61 MB)
```  

### Invocation

  

After successful deployment, you can call the created application via HTTP:

  

```bash

https://prji261hli.execute-api.us-east-1.amazonaws.com/users

```


### Local development

  

```

serverless offline

```

