package org.allenai.example.webapp

import java.io.FileReader
import java.net.URLEncoder
import au.com.bytecode.opencsv.CSVReader
import spray.json._
import spray.json.DefaultJsonProtocol._

import scala.collection.JavaConverters._
import spray.http.Uri

import scala.io.Source

// import akka.http.scaladsl.model
//import scala.io.Source
import scala.util.Random

case class StringAlignmentPair(string: String, alignment: Array[Int])
case class Question(questionCons: Array[StringAlignmentPair], options: Array[StringAlignmentPair])
case class Table(titleRow: Array[StringAlignmentPair], contentMatrix: Seq[Array[StringAlignmentPair]])
case class VisualizationAnswer(tables: Array[Table], question: Question)
//case class QuestionAlignment(questionCons: Array[Int], options: Array[Int])

//object Question {
//  implicit val questionJsonFormat = jsonFormat2(Question.apply)
//}

//case class AllVariables(
//  intraTableVariables: IndexedSeq[IntraTableVariable],
//  interTableVariables: IndexedSeq[InterTableVariable],
//  questionTableVariables: IndexedSeq[QuestionTableVariable]
//)

//object AllVariables {
//  implicit val moreVariablesJsonFormat = jsonFormat3(AllVariables.apply)
//}

//case class TableAlignment(titleRow: Array[Int], contentMatrix: Seq[Array[Int]])

//object Table {
//  implicit val tableJsonFormat = jsonFormat2(Table.apply)
//}

//case class IntraTableVariable(tableIter: Int, rowIter: Int, colIter1: Int, colIter2: Int,
//  variable: Long)

//object IntraTableVariable {
//  implicit val intraTableVariablesJsonFormat = jsonFormat5(IntraTableVariable.apply)
//}

//case class InterTableVariable(tableIter1: Int, tableIter2: Int, rowIter1: Int, rowIter2: Int,
//  colIter1: Int, colIter2: Int, variable: Long)

//object InterTableVariable {
//  implicit val interTableVariablesJsonFormat = jsonFormat7(InterTableVariable.apply)
//}

//case class QuestionTableVariable(tableIter: Int, qConsIter: Int, rowIter: Int, colIter: Int,
//  variable: Long)

//object QuestionTableVariable {
//  implicit val questionTableVariablesJsonFormat = jsonFormat5(QuestionTableVariable.apply)
//}

object VisualizationAnswer {
  // implicit val questionTableVariablesJsonFormat = jsonFormat5(QuestionTableVariable.apply)
  // implicit val interTableVariablesJsonFormat = jsonFormat7(InterTableVariable.apply)
  // implicit val intraTableVariablesJsonFormat = jsonFormat5(IntraTableVariable.apply)
  implicit val stringAlignmentJsonFormat = jsonFormat2(StringAlignmentPair.apply)
  //implicit val tablealignmentJsonFormat = jsonFormat2(TableAlignment.apply)
  implicit val tableJsonFormat = jsonFormat2(Table.apply)
  //implicit val questionAlignmentJsonFormat = jsonFormat2(QuestionAlignment.apply)
  implicit val questionJsonFormat = jsonFormat2(Question.apply)
  // implicit val moreVariablesJsonFormat = jsonFormat3(AllVariables.apply)
  implicit val visualizationAnswerJsonFormat = jsonFormat2(VisualizationAnswer.apply)

  def exampleResponse(): VisualizationAnswer = {
    val tablesAlignment = loadTables()
    //    val tableAlignment = createFakeTableAlignments(tables)
    // var intraTableVariables = IndexedSeq[IntraTableVariable]()
    // intraTableVariables = intraTableVariables :+ IntraTableVariable(1, 1, 1, 2, 1)
    // intraTableVariables = intraTableVariables :+ IntraTableVariable(0, 1, 1, 2, 1)
    // println(intraTableVariables)

    //    var interTableVariables = IndexedSeq[InterTableVariable]()
    //    interTableVariables = interTableVariables :+ InterTableVariable(1, 0, 1, 2, 1, 1, 1)
    //    interTableVariables = interTableVariables :+ InterTableVariable(0, 1, 1, 2, 1, 1, 1)
    //    println(interTableVariables)
    //
    //    var questionTableVariable = IndexedSeq[QuestionTableVariable]()
    //    questionTableVariable = questionTableVariable :+ QuestionTableVariable(1, 0, 1, 2, 1)
    //    questionTableVariable = questionTableVariable :+ QuestionTableVariable(0, 1, 1, 2, 1)
    //    println(interTableVariables)

    val r = scala.util.Random
    val questionChunks = Array("In", "New York State", "the", "shortest", "period",
      "of", "daylight", "occurs", "during", "which", "month")
    val questionChunkAlignmentPair = questionChunks.map { chunk =>
      val randSize = r.nextInt(4)
      val randomAlignment = (0 until randSize).map { item => r.nextInt(13) }
      StringAlignmentPair(chunk, randomAlignment.toArray)
    }
    val options = Array("January", "December", "June", "July")
    val optionsAlignmentPair = options.map { chunk =>
      val randSize = r.nextInt(4)
      val randomAlignment = (0 until randSize).map { item => r.nextInt(13) }
      StringAlignmentPair(chunk, randomAlignment.toArray)
    }
    val questionAlignementPair = new Question(questionChunkAlignmentPair, optionsAlignmentPair)

    VisualizationAnswer(tablesAlignment, questionAlignementPair)
  }

  def loadTables(): Array[Table] = {
    val path = "src/main/resources/"
    val files = Seq("tables/SampleTable-Country-Hemisphere.csv", "tables/SampleTable-Season-Month.csv")
    val tables = files.map(file => readCSV(path + file))
    tables.foreach(t => println(t.titleRow.mkString(",")))
    tables.toArray
  }
  //  def createFakeTableAlignments(tables: Array[Table]): Array[TableAlignment] = {
  //    val r = scala.util.Random
  //    val tabelAlignment = tables.map { table =>
  //      val titleRowAlignment = Seq.fill(table.titleRow.length)(Random.nextInt).toArray
  //      val contentMatrixAlignment = table.contentMatrix.map{row => Seq.fill(row.length)(Random.nextInt).toArray}
  //      TableAlignment(titleRowAlignment,contentMatrixAlignment)
  //    }
  //    tabelAlignment
  //  }

  //def main(args: Array[String]) {
  //  example3()
  //}

  def readCSV(file: String): Table = {
    val reader = new CSVReader(new FileReader(file))
    val fullContents: Seq[Array[String]] = reader.readAll.asScala
    val r = scala.util.Random
    val fullContentsAlignment = fullContents.map { row =>
      val randSize = r.nextInt(4)
      val randomAlignment = (0 until randSize).map { item => r.nextInt(13) }
      val contentMatrixAlignment = row.map { cell => StringAlignmentPair(cell, randomAlignment.toArray) }
      contentMatrixAlignment
    }
    Table(fullContentsAlignment.head, fullContentsAlignment.tail)
  }

  def main(args: Array[String]) {
    val text = Some("test question (a) x (b) y").get
    val query = "http://localhost:8080/ask?text=" + URLEncoder.encode(text, "UTF-8")
    println(query)
    val html = Source.fromURL(query)
    val s = html.mkString
    println(s)
  }
}
