# URL SHORTENER TEST

## Running the code

-  Clone the repository
-  Run ```npm i```
-  Add a _.env_ as the example
-  Run ```npm run dev```

## Endpoints

1. POST _/encode_
   
```
curl --location --request POST 'localhost:3001/encode' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "https://mail.com/udea"
}'
```
- Example response

```
{
    "status": 200,
    "key": "http://localhost:3001/fD1Wwic4x"
}
```
Notice that you just have to send a GET request with the returned url to decode key and get the original url

2. GET _/:key_

```
curl --location --request GET 'http://localhost:3001/fD1Wwic4x'
```

- Example response

{
  "url": "https://mail.com/udea"
}

## Technical Consideration

- The service runs an In-Memory mongodb instance to store the data. If you reset the service the data will be erased.
- I choose a three layers architecture with controller layer, a service layer and a data access layer that in this case was omited due the nature of the problem (easy to solve in a couple of lines)
- The database is being initialize with the following data { "key": "ndivubsd", "url": "http://test.com" }