package org.allenai.example.webapp

import java.net.URLEncoder

import org.allenai.common.Logging
import spray.http.Uri.Path

import scala.concurrent.{ ExecutionContext, Future }
import scala.io.Source

import spray.routing._
import spray.httpx.SprayJsonSupport
import org.allenai.example.webapp.StringMessage._

import java.io.{ PrintWriter, File }

/** SampleService provides a definition for some routes in the web application. */
class SampleService(implicit ec: ExecutionContext) extends Directives with SprayJsonSupport with Logging {

  def query(text: String): Future[StringMessage] = {
    Future {
      val query = "http://localhost:8080/ask?text=" + URLEncoder.encode(text, "UTF-8")
      StringMessage(Source.fromURL(query).mkString)
    }
  }

  val route = {
    // If the URL path starts with "hello"
    pathPrefix("hello") {
      // ...and there's nothing more
      pathEnd {
        parameters('text) { text =>
          get {
            complete {
              query(text) map { result =>
                result
              }
            }
          }
        }
      }
    }
  }
}
