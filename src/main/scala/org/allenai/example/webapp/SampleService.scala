package org.allenai.example.webapp

import java.net.URLEncoder

import org.allenai.common.Logging
import spray.http.Uri.Path

import scala.io.Source

import spray.routing._
import spray.httpx.SprayJsonSupport
import org.allenai.example.webapp.StringMessage._

import java.io.{ PrintWriter, File }

/** SampleService provides a definition for some routes in the web application. */
class SampleService extends Directives with SprayJsonSupport with Logging {
  val route = {
    // If the URL path starts with "hello"
    pathPrefix("hello") {
      // ...and there's nothing more
      pathEnd {
        parameters('text.?) { text =>
          println(">>>>>>>>>>>>>>>>>>>> Hey you!! ")
          println(text.get)
          val query = "http://localhost:8080/ask?text=" + URLEncoder.encode(text.get, "UTF-8")
          //println(query)
          val html = Source.fromURL(query)
          val s = html.mkString
          //println("Done printing something ... ")

          //          val writer = new PrintWriter(new File("/Users/i-danielk/output.txt"))
          //          writer.write(s)
          //          writer.close()

          println(s)
          //logger.debug(s)

          // for all GET requests
          get {
            // respond with the following content
            complete {
              //<h1>Say hello to spray</h1>
              //            val anotherString = "Salam]"
              //            println("This is a sample output")
              //
              //val string = MoreGreeting("howdy Chen-Tse ... ")
              //            println(string)
              //anotherString
              //string
              //            val str = SubGreetings("Salam aleik")
              //            str

              //              println(">>>>>>>>>>>>>>>>>>>> Hey you!! ")
              //              println(text)

              //VisualizationAnswer.exampleResponse()
              //Greeting(SubGreetings("Hey all"))
              StringMessage(s)
            }
          }
        }
      }
    }
  }
}
