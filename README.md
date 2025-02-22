# kafka-producer

## start server
```sh
nvm use
npm i
npm start
```

## start kafka
Download kafka [https://kafka.apache.org/downloads](https://kafka.apache.org/downloads) to `~/bin/kafka`
```sh
cd ~/bin/kafka &&
bin/zookeeper-server-start.sh config/zookeeper.properties &
bin/kafka-server-start.sh config/server.properties
```

## produce message
```sh
curl --location 'localhost:3000/produce?topic=topic_name' \
--header 'Content-Type: application/json' \
--data '{
    "id": 1
}'
```
