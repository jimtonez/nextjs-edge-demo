import nbcsports from '../public/nbcsports.jpeg'
import golfch from '../public/golfch.jpeg'
import manchesterUnited from '../public/manchester_united.png'
import leicester from '../public/leicester.png'
import liverpool from '../public/liverpool.png'
import newcastle from '../public/newcastle.png'

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
                name: "3-0",
                logo: leicester
            },
            {
                name: "Leicester City",
                logo: leicester
            }
        ],
        score: "3-0",
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
                name: "0-2",
                logo: leicester
            },
            {
                name: "Liverpool",
                logo: liverpool
            }
        ],
        score: "3-1",
        url: "https://www.youtube.com/embed/w3zQkhKImHk"
    }
];