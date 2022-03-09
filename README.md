# Rocket League Fixture Creator Project

Author
    Jamie Orr

Introduction
    The brief was to create a CRUD application that encapsulated all the core modules covered during the training.

    Project Management - A fully expanded Jira board, clear documentation from a design phase. Code integrated into a Version Control System. In this project I used GitHub.

    Databases - A relational database to store persistent data from the project.

    Java SE & Spring Boot - Functional application created in OOP language which meets requirements of Kanban board.

    Testing - Acceptable level of test coverage on back-end (MockMVC). The testing for this project has 97.7% coverage.

    Front-End Development - Functioning front-end website with API integration.

Planning Resources:
    Using Jira Software I created a Kanban board. Within this I made 4 Epics relating to different phases of the project. An example of one of the Epics is below:

    Epic: Create the backend of the project

        User Story: As a developer, I want to add CRUD functionality, so that the backend can receive http requests and execute them in the database.
            
            Task: Create a Match repository object which extends the JPA Repository object and add any other additional methods.
            Task: Create a Match domain object which will contain each field in the MySql entity.
            Task: Create a Match service object which will contain methods interacting with the repository object.
            Task: Create a Match controller object which will handle http requests for all the methods in the service object.
        
        User Story: As a developer, I want to test my backend functionality with at least 80% coverage, so that I can affirm that the backend of the application is functional.

            Task: Create and perform integration tests on each of the methods in the Match controller object using MockMVC      

    Throughout the project build I completed 4 different sprints, each corresponding to the Epics on my Kanban Board.

    I set up two git repositories before starting - one for the front-end and one for back-end.

    I made regular commits, and pushed these commits up to my remote repository for extra protection. These commits were usually made after adding new functionality or fixing an issue.

Databases
    Two databases were used in this project, a local H2 database which was used for testing the back-end and a MySQL database for storing the persistent data from the application.

    H2:

    The H2 database was created with fixture-schema.sql and fixture-data.sql files to automatically populate the fields for testing purposes.

    MySQL:

    The layout for my MySql database was very simple. There was only one entity (fixtures), which contained 4 fields (id, stadium, conditions and team size).

Backend
    The back-end of this project was created using Java in a Spring Boot Framework. All the Kanban requirements were met.

Testing
    Only integration testing was used on this project

    Integration testing: MockMVC\

    To make sure that the program was working, I used MockMVC to create a mocked Controller class.

    It performed mock HTTP requests like a user of the program would and allowed me to test the outcomes of each HTTP endpoint.

Frontend
    The front-end is built from HTML, CSS and JavaScript. The JavaScript file contains functions which use the Fetch API to send requests to the database and retrieve information.
