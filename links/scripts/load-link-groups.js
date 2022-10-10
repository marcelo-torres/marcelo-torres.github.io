

function loadLinkGroups(linkGroupListHtmlElement) {
    if(!linkGroupListHtmlElement || !linksGroups) return;

    for(let i = 0; i < linksGroups.length; i++) {
        linkGroupListHtmlElement.appendChild(
            createLinkGroupElement(linksGroups[i])
        );
    }
}

function createLinkGroupElement(jsonDescription) {
    console.log(jsonDescription);
    var linkGroupElement = document.createElement('link-group');
    linkGroupElement.innerText = JSON.stringify(jsonDescription);
    return linkGroupElement;
}

const linksGroups = [
    {
        "groupName": "Backend",
        "elements": [
            {
                "name": "Tutorials Jenkov",
                "link": "http://tutorials.jenkov.com/",
                "description": "Java programming language tutorials"
            },
            {
                "name": "Microservices.io",
                "link": "https://microservices.io/",
                "description": "Documentation about Microservice Architecture Patterns"
            },
            {
                "name": "Design Patterns",
                "link": "https://refactoring.guru/design-patterns",
                "description": "Catalog of design patterns with code examples"
            }
        ]
    },
    {
        "groupName": "API",
        "elements": [
            {
                "name": "REST API designing",
                "link": "https://github.com/oliveira-michel/guias-api/blob/master/design-rest-api/guia.md",
                "description": "A guideline for REST API designing (Portuguese)"
            },
            {
                "name": "JSONQuery",
                "link": "https://jsonquery.co.uk/",
                "description": "Online JSON Querying Tool"
            }
        ]
    },
    {
        "groupName": "Frontend",
        "elements": [
            {
                "name": "W3C",
                "link": "https://www.w3schools.com/",
                "description": "Educational website for learning coding online"
            }
        ]
    },
    {
        "groupName": "Tools",
        "elements": [
            {
                "name": "Trello",
                "link": "https://trello.com/",
                "description": " Kanban-style application"
            },
            {
                "name": "Learn Git Branching",
                "link": "https://learngitbranching.js.org/",
                "description": "A visual and interactive way to learn Git"
            }
        ]
    },
    {
        "groupName": "Concepts",
        "elements": [
            {
                "name": "BFF",
                "link": "https://samnewman.io/patterns/architectural/bff/",
                "description": "Backends For Frontends"
            },
            {
                "name": "Conway's law",
                "link": "https://en.wikipedia.org/wiki/Conway%27s_law",
                "description": ""
            }
        ]
    },
    {
        "groupName": "AI",
        "elements": [
            {
                "name": "MLU-EXPLAIN",
                "link": "https://mlu-explain.github.io/linear-regression/",
                "description": "Visual explanations of core machine learning concepts"
            },
        ]
    },
    {
        "groupName": "Others",
        "elements": [
            {
                "name": "Data Viz Project",
                "link": "https://datavizproject.com/#",
                "description": "Catalog of data visualizations"
            },
        ]
    }
]
