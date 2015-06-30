import org.allenai.plugins.CoreDependencies._

organization := "org.allenai.example"

name := "webapp"

description := "Visualizer for Table-ILP solver"

enablePlugins(WebappPlugin)

libraryDependencies ++= Seq(
  allenAiCommon,
  allenAiWebapp,
  sprayJson,
  "net.sf.opencsv" % "opencsv" % "2.1",
  "org.scalaj" %% "scalaj-http" % "1.1.4",
  "org.apache.httpcomponents" % "httpclient" % "4.5"
)

javaOptions ++= Seq(s"-Dlogback.appname=${name.value}")
