

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
        "groupName": "Tools",
        "elements": [
            {
                "name": "Trello",
                "link": "https://trello.com/",
                "description": " Kanban-style application"
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
    }
]
