'use strict';

const React = require('react');
const Qwest = require('qwest');

var output11 =
{
    response: {
        success: {
            answers: [
                {
                    selection: {
                        assertion: "Is it true that test question x?",
                        focus: "x",
                        key: "(a)",
                        index: 0
                    },
                    confidence: 1,
                    selected: true,
                    analyses: [
                        {
                            component: {
                                name: "TableIlp",
                                version: {
                                    git: "5e8a89327111581f62c6bed211f3265b40cb27ff",
                                    commitDate: 1434651953000,
                                    artifact: "0.0.4-SNAPSHOT",
                                    repoUrl: "http://github.com/allenai/aristo"
                                }
                            },
                            confidence: 1,
                            analysis: {
                                reasoning: "this was alphabetically first in the list"
                            }
                        },
                        {
                            component: {
                                name: "TableIlp",
                                version: {
                                    git: "5e8a89327111581f62c6bed211f3265b40cb27ff",
                                    commitDate: 1434651953000,
                                    artifact: "0.0.4-SNAPSHOT",
                                    repoUrl: "http://github.com/allenai/aristo"
                                }
                            },
                            confidence: 0,
                            analysis: {
                                alignment: {
                                    tables: [
                                        {
                                            titleRow: [
                                                {
                                                    string: "Country",
                                                    alignment: "11"
                                                },
                                                {
                                                    string: "Hemisphere",
                                                    alignment: "10"
                                                }
                                            ],
                                            contentMatrix: [
                                                [
                                                    {
                                                        string: "USA",
                                                        alignment: ""
                                                    },
                                                    {
                                                        string: "North",
                                                        alignment: "7,3,1"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Brazil",
                                                        alignment: "3,0,10"
                                                    },
                                                    {
                                                        string: "South",
                                                        alignment: "2"
                                                    }
                                                ]
                                            ]
                                        },
                                        {
                                            titleRow: [
                                                {
                                                    string: "Season",
                                                    alignment: "4"
                                                },
                                                {
                                                    string: "Month",
                                                    alignment: "4,9,11"
                                                }
                                            ],
                                            contentMatrix: [
                                                [
                                                    {
                                                        string: "Spring",
                                                        alignment: "3,0"
                                                    },
                                                    {
                                                        string: "March",
                                                        alignment: ""
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Spring",
                                                        alignment: "0"
                                                    },
                                                    {
                                                        string: "April",
                                                        alignment: "0,9,1"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Spring",
                                                        alignment: "2"
                                                    },
                                                    {
                                                        string: "May",
                                                        alignment: ""
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Summer",
                                                        alignment: "4,0,8"
                                                    },
                                                    {
                                                        string: "June",
                                                        alignment: "4,10"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Summer",
                                                        alignment: "0,7,0"
                                                    },
                                                    {
                                                        string: "July",
                                                        alignment: "4,3,3"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Summer",
                                                        alignment: "10"
                                                    },
                                                    {
                                                        string: "August",
                                                        alignment: "9,9"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Fall",
                                                        alignment: ""
                                                    },
                                                    {
                                                        string: "September",
                                                        alignment: "3,0"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Fall",
                                                        alignment: "11,4"
                                                    },
                                                    {
                                                        string: "October",
                                                        alignment: "12"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Fall",
                                                        alignment: "3"
                                                    },
                                                    {
                                                        string: "November",
                                                        alignment: "12,2,1"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Winter",
                                                        alignment: "9,7,0"
                                                    },
                                                    {
                                                        string: "December",
                                                        alignment: "0,4"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Winter",
                                                        alignment: "7"
                                                    },
                                                    {
                                                        string: "January",
                                                        alignment: "12"
                                                    }
                                                ],
                                                [
                                                    {
                                                        string: "Winter",
                                                        alignment: "6,11"
                                                    },
                                                    {
                                                        string: "February",
                                                        alignment: "6"
                                                    }
                                                ]
                                            ]
                                        }
                                    ],
                                    question: {
                                        questionCons: [
                                            {
                                                string: "In",
                                                alignment: "1"
                                            },
                                            {
                                                string: "New York State",
                                                alignment: ""
                                            },
                                            {
                                                string: "the",
                                                alignment: "7,0,0"
                                            },
                                            {
                                                string: "shortest",
                                                alignment: "6"
                                            },
                                            {
                                                string: "period",
                                                alignment: "5"
                                            },
                                            {
                                                string: "of",
                                                alignment: ""
                                            },
                                            {
                                                string: "daylight",
                                                alignment: "10,8,9"
                                            },
                                            {
                                                string: "occurs",
                                                alignment: "6"
                                            },
                                            {
                                                string: "during",
                                                alignment: "2"
                                            },
                                            {
                                                string: "which",
                                                alignment: "8"
                                            },
                                            {
                                                string: "month",
                                                alignment: "1"
                                            }
                                        ],
                                        options: [
                                            {
                                                string: "January",
                                                alignment: "1"
                                            },
                                            {
                                                string: "December",
                                                alignment: "4"
                                            },
                                            {
                                                string: "June",
                                                alignment: "12,3,12"
                                            },
                                            {
                                                string: "July",
                                                alignment: ""
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            component: {
                                name: "MultipleChoiceHandler",
                                version: {
                                    git: "a3ad05e04ec1b18204c004325d4aeee849600b4c",
                                    commitDate: 1434664270000,
                                    artifact: "0.0.4-SNAPSHOT",
                                    repoUrl: "http://github.com/allenai/aristo"
                                }
                            },
                            analysis: {
                                featureVectors: {
                                    questionHash: "9720fe0c",
                                    answerKey: "(a)",
                                    numericFeatures: {
                                        questionLength: 32,
                                        diffFromMedian_TableIlp: 1,
                                        softmaxScore_TableIlp: 0.5761168847658291,
                                        score_TableIlp: 1,
                                        best_TableIlp: 1,
                                        normalizedScore_TableIlp: 1
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    selection: {
                        assertion: "Is it true that test question y?",
                        focus: "y",
                        key: "(b)",
                        index: 1
                    },
                    confidence: 0,
                    selected: false,
                    analyses: [
                        {
                            component: {
                                name: "TableIlp",
                                version: {
                                    git: "5e8a89327111581f62c6bed211f3265b40cb27ff",
                                    commitDate: 1434651953000,
                                    artifact: "0.0.4-SNAPSHOT",
                                    repoUrl: "http://github.com/allenai/aristo"
                                }
                            },
                            confidence: 0,
                            analysis: {
                                reasoning: "this was not alphabetically first"
                            }
                        },
                        {
                            component: {
                                name: "MultipleChoiceHandler",
                                version: {
                                    git: "a3ad05e04ec1b18204c004325d4aeee849600b4c",
                                    commitDate: 1434664270000,
                                    artifact: "0.0.4-SNAPSHOT",
                                    repoUrl: "http://github.com/allenai/aristo"
                                }
                            },
                            analysis: {
                                featureVectors: {
                                    questionHash: "9720fe0c",
                                    answerKey: "(b)",
                                    numericFeatures: {
                                        questionLength: 32,
                                        diffFromMedian_TableIlp: 0,
                                        softmaxScore_TableIlp: 0.21194155761708547,
                                        score_TableIlp: 0,
                                        best_TableIlp: 0,
                                        normalizedScore_TableIlp: 0
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        }
    },
    trail: {
        crumb: {
            componentName: "Controller",
            version: {
                git: "a3ad05e04ec1b18204c004325d4aeee849600b4c",
                commitDate: 1434664270000,
                artifact: "0.0.4-SNAPSHOT",
                repoUrl: "http://github.com/allenai/aristo"
            },
            elapsedTime: 11,
            extra: { }
        },
        children: [
            {
                crumb: {
                    componentName: "SimpleDecomposer",
                    version: {
                        git: "a3ad05e04ec1b18204c004325d4aeee849600b4c",
                        commitDate: 1434664270000,
                        artifact: "0.0.4-SNAPSHOT",
                        repoUrl: "http://github.com/allenai/aristo"
                    },
                    elapsedTime: 7,
                    extra: { }
                }
            },
            {
                crumb: {
                    componentName: "TableIlp",
                    version: {
                        git: "a3ad05e04ec1b18204c004325d4aeee849600b4c",
                        commitDate: 1434664270000,
                        artifact: "0.0.4-SNAPSHOT",
                        repoUrl: "http://github.com/allenai/aristo"
                    },
                    elapsedTime: 8,
                    extra: { }
                }
            }
        ]
    }
};

var colors = ['white', 'gray', 'red', 'maroon', 'yellow', 'olive', 'lime', 'green',
    'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple'];
var questionGlobal = {
    "questionCons": [{
        "string": "In",
        "alignment": 2
    }, {"string": "New York State", "alignment": 1}, {
        "string": "the",
        "alignment": -1
    }, {"string": "shortest", "alignment": -1}, {"string": "period", "alignment": 0}, {
        "string": "of",
        "alignment": 2
    }, {"string": "daylight", "alignment": 0}, {
        "string": "occurs",
        "alignment": 2
    }, {"string": "during", "alignment": 1}, {"string": "which", "alignment": 0}, {
        "string": "month",
        "alignment": 0
    }],
    "options": [{"string": "January", "alignment": 1}, {
        "string": "December",
        "alignment": 2
    }, {"string": "June", "alignment": 1}, {"string": "July", "alignment": 1}]
};

var tablesGlobal2 =
    [
        {
            "titleRow": [{"string": "Country", "alignment": -1}, {
                "string": "Hemisphere",
                "alignment": 2
            }],
            "contentMatrix": [[{"string": "USA", "alignment": -1}, {
                "string": "North",
                "alignment": 2
            }], [{"string": "Brazil", "alignment": 0}, {"string": "South", "alignment": 0}]]
        },
        {
            "titleRow": [{"string": "Season", "alignment": 0}, {"string": "Month", "alignment": 0}],
            "contentMatrix": [[{"string": "Spring", "alignment": -1}, {
                "string": "March",
                "alignment": -1
            }], [{"string": "Spring", "alignment": 1}, {
                "string": "April",
                "alignment": -1
            }], [{"string": "Spring", "alignment": 0}, {
                "string": "May",
                "alignment": 2
            }], [{"string": "Summer", "alignment": 2}, {
                "string": "June",
                "alignment": 2
            }], [{"string": "Summer", "alignment": 0}, {
                "string": "July",
                "alignment": 0
            }], [{"string": "Summer", "alignment": 1}, {
                "string": "August",
                "alignment": 2
            }], [{"string": "Fall", "alignment": 0}, {
                "string": "September",
                "alignment": 0
            }], [{"string": "Fall", "alignment": -1}, {
                "string": "October",
                "alignment": -1
            }], [{"string": "Fall", "alignment": 1}, {
                "string": "November",
                "alignment": 0
            }], [{"string": "Winter", "alignment": -1}, {
                "string": "December",
                "alignment": 2
            }], [{"string": "Winter", "alignment": -1}, {
                "string": "January",
                "alignment": 0
            }], [{"string": "Winter", "alignment": 2}, {"string": "February", "alignment": -1}]]
        }
    ];

var tablesEmpty =
    [
        {
            "titleRow": [],
            "contentMatrix": [[]]
        }
    ];

var questionEmpty = {
    "questionCons": [],
    "options": []
};


class TableVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading /api/hello',
            tables: tablesEmpty,
            question: questionEmpty,
            BKColor: 'red',
            response: 'empty',
            response11: 'empty',
            activeAlignments: []
        };
    }

    componentDidMount() {
        var text = this.refs.text.getDOMNode().value;
        Qwest.get('/api/hello?text=' + text).then(
            function (response) {
                this.setState({
                    text: 'Response received: ' + JSON.stringify(response),
                    tables: JSON.parse(response.text).response.success.answers[0].analyses[1].analysis.alignment.tables,
                    question: JSON.parse(response.text).response.success.answers[0].analyses[1].analysis.alignment.question
                });
            }.bind(this)
        );
    }

    ShowARowOfTable(row) {
        var rows = [];
        var self = this;
        row.forEach(function (tableCell) {
            window.console.log("This is a msg: ");
            window.console.log(tableCell);
            window.console.log(tableCell[1]);
            window.console.log(tableCell[1].length);
            var klazz = '';
            if (tableCell[1].length > 0)
                klazz = "aligned";

            var highlightAlignedCells = function() {
                self.setState({ activeAlignments: tableCell[1] });
            };

            var unhighlight = function() {
                self.setState({ activeAlignments: [] });
            };

            var isActive = self.state.activeAlignments.filter(function(i) {
                return tableCell[1].indexOf(i) !== -1;
            }).length > 0;

            if (isActive) {
                klazz += ' active-alignment';
            }

            rows.push(
                <td className={klazz} onMouseEnter={highlightAlignedCells} onMouseLeave={unhighlight}>
                    {JSON.stringify(tableCell[0])}: {JSON.stringify(tableCell[1])}
                </td>
            );
        });
        return ( {rows} );
    }

    ShowATable(table) {
        var rows = [];
        var self = this;
        var klazz = 'title';
        var title = <tr className={klazz}> {self.ShowARowOfTable(table.titleRow)} </tr>;
        rows.push(title);
        table.contentMatrix.forEach(function (row) {
            var goo = <tr> {self.ShowARowOfTable(row)} </tr>;
            rows.push(goo);
        });
        return (<table> {rows} </table> );
    }

    ShowTables(tables) {
        var self = this;
        var rows = [];
        tables.forEach(function (table) {
            //rows.push(<h2>A table here  </h2> );
            rows.push(self.ShowATable(table));
        });

        var tableRows = <div>{rows}</div>;

        return (
            <div>
                {tableRows}
            </div>
        );
    }

    handleSubmit() {
        //var response = this.state.response11;
        //let textEl = this.refs.text.getDOMNode();
        //window.console.log('TODO: Send request with text = ' + textEl.value);
        //window.console.log(this.state.response11);
        //window.console.log(JSON.stringify(this.state.response11));
        this.componentDidMount();
        //window.console.log( JSON.parse( JSON.stringify(output11) ) );
        //window.console.log("result: ");
        //window.console.log(  this.state.response );
        window.console.log("question = ");
        window.console.log(this.state.question);
        window.console.log("tables = ");
        window.console.log(this.state.tables);
        this.render();

        //window.console.log( JSON.parse( response ) )
        //window.console.log( JSON.parse( JSON.stringify( questionGlobal ) ) )
        //var jsonified = JSON.parse(this.state.response);
        //window.console.log( jsonified );
        //window.console.log( questionGlobal );
        //var stringigfied1 = JSON.stringify(questionGlobal);
        //window.console.log( stringigfied1 );
        //var jsonfied2 = eval( stringigfied1 );
        //window.console.log("result: ");
        //window.console.log( JSON.parse(JSON.stringify(questionGlobal)) );
    }

    render() {
        var qCons = this.ShowARowOfTable(this.state.question.questionCons);
        var options = this.ShowARowOfTable(this.state.question.options);
        var ts = this.ShowTables(this.state.tables);
        //var question = this.ShowARowOfTable(this.state.tables[0].contentMatrix[0]);
        //var question = this.ShowARowOfTable(this.state.question.questionCons);

        // <div>
        //   <h3> {JSON.stringify(this.state.question.questionCons)} </h3>
        // </div>
        // <div>
        //   <h3> {JSON.stringify(this.state.question)} </h3>
        // </div>
        // <div>
        //   <h3> {JSON.stringify(this.state.tables[0].contentMatrix[0])} </h3>
        // </div>

        //onClick={this.handleLogin}
        // onChange={this.handleFocusChange}/
        // onChange={this.handleTextChange}

        // <form>
        //      <input type="text" name="text" placeholder="Text"  />
        //      <input type="focus" name="focus" placeholder="Focus" />
        //      <button type="button" >Login</button>
        //    </form>


        //<div>
        //    <h3> {JSON.stringify(this.state.question.questionCons)} </h3>
        //</div>
        //<div>
        //<h3> {JSON.stringify(this.state.question)} </h3>
        //</div>
        //<div>
        //    <h3> {JSON.stringify(this.state.tables[0].contentMatrix[0])} </h3>
        //</div>

        return (
            <div>
                <header className="padded"><h1>Multi-Table Alignment Visualization</h1></header>
                <main className="text-center padded">
                    <section>
                        Text: <input type="text" ref="text" name="text" defaultValue="Text"/> <br/>
                        <button onClick={this.handleSubmit.bind(this)}>Ask</button>
                    </section>
                    <section>
                        <h3> Question: </h3>
                        <table>
                            <tr> {qCons} </tr>
                        </table>
                        <h3> Options: </h3>
                        <table>
                            <tr> {options} </tr>
                        </table>
                        <h3> Tables: </h3>
                        {ts}
                    </section>
                </main>
            </div>
        );
    }
}

React.render(<TableVisualizer />, document.body );
