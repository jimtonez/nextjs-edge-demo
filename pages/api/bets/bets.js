// import { KafkaStreams } from 'kafka-streams'

// export default async (req, res) => {

//     const config = require("../../../backend/config/config.json")
//     const kafkaStreams = new KafkaStreams(config);
//     kafkaStreams.on("error", (error) => console.error(error));

//     // const betsStream =
//     // factory.getKStream()
//     // .from("bets-in")
//     // .mapJSONConvenience()
//     // .mapWrapKafkaValue()
//     // .forEach(console.log);

//     const kafkaTopicName = "bets-in";
//     const stream = kafkaStreams.getKStream(kafkaTopicName);

//     stream.forEach(message => console.log(message));
//     stream.start().then(() => {
//         console.log("stream started, as kafka consumer is ready.");
//     }, error => {
//         console.log("streamed failed to start: " + error);
//     });

//     console.log(stream)
// }