package org.allenai.example.webapp;

import spray.json._
import spray.json.DefaultJsonProtocol._

case class StringMessage(text: String)

object StringMessage {
  implicit val greetingJsonFormat = jsonFormat1(StringMessage.apply)
}
