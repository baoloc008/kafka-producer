const express = require("express");
const bodyParser = require("body-parser");
const { Kafka, Partitioners } = require("kafkajs");

const SERVER_PORT = 4000;

const app = express();
app.use(bodyParser.json());

const kafka = new Kafka({ brokers: ["127.0.0.1:9092"] });

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});

async function produce(topic, message) {
  await producer.connect();
  await producer.send({
    topic: topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
}

app.post("/produce", async (req, res) => {
  const topic = req.query.topic;
  const message = req.body;
  try {
    await produce(topic, message);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message || "Message sent error" });
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
