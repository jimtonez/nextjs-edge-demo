import nbcsports from '../public/nbcsports.jpeg'
import golfch from '../public/golfch.jpeg'
import manchesterUnited from '../public/manchester_united.png'
import leicester from '../public/leicester.png'
import liverpool from '../public/liverpool.png'
import newcastle from '../public/newcastle.png'
import premier from '../public/premier.webp'

export const events = [
    {
        id: "event-1",
        title: "Manchester United v. Leicester City | PREMIER LEAGUE HIGHLIGHTS | 2/19/2023 | NBC Sports",
        logo: nbcsports,
        tags: [
            {
                name: "Soccer",
                icon: "⚽️"
            },
        ],
        teams: [
            {
                name: "Manchester United",
                logo: manchesterUnited
            },
            {
                name: "Tie",
                logo: premier
            },
            {
                name: "Leicester City",
                logo: leicester
            }
        ],
        score: "3-0",
        predictions: [
            {
                name: "Match Result",
                tabs: [
                    {
                        name: "Regular Time",
                        results: [
                            {
                                team: "Manchester United",
                                logo: manchesterUnited,
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: manchesterUnited,
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: leicester,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    },
                    {
                        name: "1st Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: manchesterUnited,                                
                                odds: "+106",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: manchesterUnited,                               
                                odds: "+161",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: leicester,
                                odds: "+440",
                                trend: "negative"
                            }
                        ]
                    },
                    {
                        name: "2nd Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: manchesterUnited,                                
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: manchesterUnited,    
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: leicester,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Match Result",
                tabs: [
                    {
                        name: "Regular Time",
                        results: [
                            {
                                team: "Manchester United",
                                logo: manchesterUnited,
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: manchesterUnited,
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: leicester,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    },
                    {
                        name: "1st Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: manchesterUnited,                                
                                odds: "+106",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: manchesterUnited,                               
                                odds: "+161",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: leicester,
                                odds: "+440",
                                trend: "negative"
                            }
                        ]
                    },
                    {
                        name: "2nd Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: manchesterUnited,                                
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: manchesterUnited,    
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: leicester,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    }
                ]
            },
        ],
        url: "https://www.youtube.com/embed/V1n0Da6zbeM"
    },
    // {
    //     id: "event-2",
    //     title: "Relive Tiger Woods' best shots from Rd. 3 at Genesis Invitational | Golf Channel",
    //     logo: golfch,
    //     tags: [
    //         {
    //             name: "Golf",
    //             icon: "⛳️"
    //         },
    //     ],
    //     url: "https://www.youtube.com/embed/IORHuqDy9rs"
    // },
    {
        id: "event-3",
        title: "Newcastle United v. Liverpool | PREMIER LEAGUE HIGHLIGHTS | 2/18/2023 | NBC Sports",
        logo: nbcsports,
        tags: [
            {
                name: "Soccer",
                icon: "⚽️"
            },
        ],
        teams: [
            {
                name: "Newcastle United",
                logo: newcastle
            },
            {
                name: "Tie",
                logo: premier
            },
            {
                name: "Liverpool",
                logo: liverpool
            }
        ],
        score: "0-2",
        predictions: [
            {
                name: "Match Result",
                tabs: [
                    {
                        name: "Regular Time",
                        results: [
                            {
                                team: "Manchester United",
                                logo: newcastle,
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: premier,
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: liverpool,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    },
                    {
                        name: "1st Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: newcastle,                                
                                odds: "+106",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: premier,                               
                                odds: "+161",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: liverpool,
                                odds: "+440",
                                trend: "negative"
                            }
                        ]
                    },
                    {
                        name: "2nd Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: newcastle,                                
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: premier,    
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: liverpool,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Match Result",
                tabs: [
                    {
                        name: "Regular Time",
                        results: [
                            {
                                team: "Manchester United",
                                logo: newcastle,
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: premier,
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: liverpool,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    },
                    {
                        name: "1st Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: newcastle,                                
                                odds: "+106",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: premier,                               
                                odds: "+161",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: liverpool,
                                odds: "+440",
                                trend: "negative"
                            }
                        ]
                    },
                    {
                        name: "2nd Half",
                        results: [
                            {
                                team: "Manchester United",
                                logo: newcastle,                                
                                odds: "-175",
                                trend: "negative"
                            },
                            {
                                team: "Draw",
                                logo: premier,    
                                odds: "+350",
                                trend: "positive"
                            },
                            {
                                team: "Leicester City",
                                logo: liverpool,
                                odds: "+480",
                                trend: "positive"
                            }
                        ]
                    }
                ]
            },
        ],
        url: "https://www.youtube.com/embed/w3zQkhKImHk"
    }
];