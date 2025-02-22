# kafka-producer

## start server
```sh
nvm use
npm i
npm start

```

## produce message
```sh
curl --location 'localhost:3000/produce?topic=topic_name' \
--header 'Content-Type: application/json' \
--data '{
    "id": 1
}'
```
