'use strict';

const React = require('react');
const Qwest = require('qwest');

var exampleQueries = [
    "In New York State, the longest period of daylight occurs during which month? (A) June  (B) March  (C) December  (D) September",
    "In New York State, the shortest period of daylight occurs during which month? (A) December (B) June (C) March (D) September",
    "How does the length of daylight in New York State change from summer to fall? (A) It decreases (B) It increases (C) It remains the same.",
    "Sleet, rain, snow, and hail are forms of (A) erosion  (B) evaporation  (C) groundwater  (D) precipitation",
    "Water freezing is an example of a (A) liquid changing to a solid  (B) solid changing to a liquid  (C) gas changing to a solid  (D) gas changing to a liquid",
    "Which form of energy is needed to change water from a liquid to a gas? (A) heat  (B) mechanical  (C) chemical  (D) sound",
    "Which type of energy does a person use to pedal a bicycle? (A) light  (B) sound  (C) mechanical  (D) electrical",
    "Which object is the best conductor of electricity? (A) a wax crayon  (B) a plastic spoon  (C) a rubber eraser  (D) an iron nail",
    "Base your answers on the information below. One hot, summer day it rained very heavily. After the rain, a plastic pan on a picnic table had 2 cm of rainwater in it. Four hours later, all the rainwater in the pan was gone. Which process caused the rainwater in the pan to disappear as it sat outside in the hot air? (A) condensation (B) evaporation (C) precipitation (D) erosion",
    "Base your answers on the information below. One hot, summer day it rained very heavily. After the rain, a plastic pan on a picnic table had 2 cm of rainwater in it. Four hours later, all the rainwater in the pan was gone. If the day were cool instead of hot, the rainwater in the pan would have disappeared (A) slower (B) faster (C) in the same amount of time",
    "Which characteristic can a human offspring inherit? (A) facial scar (B) blue eyes (C) long hair (D) broken leg",
    "A duck's feathers are covered with a natural oil that keeps the duck dry. This is a special feature ducks have that helps them (A) feed their young (B) adapt to their environment (C) attract a mate (D) search for food",
    "The functions of a plant’s roots are to support the plant and (A) make food (B) produce fruit (C) take in water and nutrients (D) aid in germination ",
    "Which food is a fruit? (A) a potato (B) an onion (C) a carrot (D) a pumpkin ",
    "In which environment would a white rabbit be best protected from predators? (A) a shady forest (B) a snowy field (C) a grassy lawn (D) a muddy riverbank",
    "Frogs lay eggs that develop into tadpoles and then into adult frogs. This sequence of changes is an example of how living things (A) go through a life cycle (B) form a food web (C) act as a source of food (D) affect other parts of the ecosystem"
];

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
    "choices": []
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
            queryValue: "",
            activeAlignments: []
        };
    }

    ShowARowOfTable(row) {
        var rows = [];
        var self = this;
        if (Array.isArray(row)) {
            row.forEach(function (tableCell, i) {
                var klazz = '';
                if (tableCell[1].length > 0)
                    klazz = "aligned";

                var highlightAlignedCells = function () {
                    self.setState({activeAlignments: tableCell[1]});
                };

                var unhighlight = function () {
                    self.setState({activeAlignments: []});
                };

                var isActive = self.state.activeAlignments.filter(function (i) {
                        return tableCell[1].indexOf(i) !== -1;
                    }).length > 0;

                if (isActive) {
                    klazz += ' active-alignment';
                }

                rows.push(
                    <td className={klazz} onMouseEnter={highlightAlignedCells} onMouseLeave={unhighlight} key={i}>
                        {tableCell[0]}: {JSON.stringify(tableCell[1])}
                    </td>
                );
            });
        }
        return rows;
    }

    ShowATable(table, tableIndex) {
        var rows = [];
        var self = this;
        var klazz = 'title';
        var title = <tr className={klazz} key="0"> {self.ShowARowOfTable(table.titleRow)} </tr>;
        rows.push(title);
        if (Array.isArray(table.contentMatrix)) {
            table.contentMatrix.forEach(function (row, i) {
                var goo = <tr key={i + 1}>{self.ShowARowOfTable(row)}</tr>;
                rows.push(goo);
            });
        }
        return (<table key={tableIndex}>{rows}</table> );
    }

    ShowTables(tables) {
        var self = this;
        var rows = [];
        if (Array.isArray(tables)) {
            tables.forEach(function (table, i) {
                //rows.push(<h2>A table here  </h2> );
                rows.push(self.ShowATable(table, i));
            });
        }

        return (
            <div>
                {rows}
            </div>
        );
    }

    handleSubmit() {
        this.setState({ loading: true });
        var text = this.refs.query.getDOMNode().value;

        Qwest.get('/api/hello?text=' + text).then(
            function (response) {
                this.setState({
                    loading: false,
                    tables: JSON.parse(response.text).response.success.answers[0].analyses[0].analysis.alignment.tables,
                    question: JSON.parse(response.text).response.success.answers[0].analyses[0].analysis.alignment.question,
                    bestChoiceScore: JSON.parse(response.text).response.success.answers[0].analyses[0].analysis.alignment.bestChoiceScore
                });
            }.bind(this)
        );
    }

    setSuggestedQuery(event) {
        var query = exampleQueries[event.target.value];
        var element = React.findDOMNode(this.refs.query);
        element.setAttribute('value', query);
    }

    render() {
        var self = this;

        var suggestions = exampleQueries.map(function (sugg, i) {
            return <option key={i + 1} value={i}>{sugg}</option>;
        });
        var suggestedQueries = (<select onChange={self.setSuggestedQuery.bind(this)}> {suggestions} </select>);

        var qCons = this.ShowARowOfTable(this.state.question.questionCons);
        var options = this.ShowARowOfTable(this.state.question.choices);
        var ts = this.ShowTables(this.state.tables);

        var loading;
        if (this.state.loading) {
            loading = <span>Loading...</span>;
        }

        return (
            <div>
                <header className="padded"><h1>Multi-Table Alignment Visualization</h1></header>
                <main className="text-center padded">
                    <section>
                        <label>Text:</label><input type="text" name="text" defaultValue={this.state.queryValue} ref="query" placeholder="Write a question here!" />
                        <button onClick={this.handleSubmit.bind(this)}>Ask</button>
                    </section>
                    {loading}
                    <br />
                    <br />
                    <br />
                    <b> Suggestions: </b>
                    <br />
                    {suggestedQueries}
                    <br />
                    <br />
                    <section>
                        <h3> Question: </h3>
                        <table>
                            <tr>{qCons}</tr>
                        </table>
                        <h3> Options: </h3>
                        <table>
                            <tr>{options}</tr>
                        </table>
                        <br/>
                        <b> Solution Objective Value: {this.state.bestChoiceScore} </b>
                        <br/>

                        <h3>Tables:</h3>
                        {ts}
                    </section>
                </main>
            </div>
        );
    }
}

React.render(<TableVisualizer />, document.body );
