# React Kanban
> A digital Kanban board made with React

![kanban_guide_print_kpo_bleed_board2-1024x517](http://i.imgur.com/NhbC7rd.png)

> "The Kanban technique emerged in the late 1940s as Toyota’s reimagined approach to manufacturing and engineering. ... The system’s highly visual nature allowed teams to communicate more easily on what work needed to be done and when. It also standardized cues and refined processes, which helped to reduce waste and maximize value." - [via LeanKit.com](http://leankit.com/learn/kanban/kanban-board/)

## Applications
Built a Digital Kanban board using:
- **React** for building the front-end User-Interface (UI)
- **SASS** for styling HTML and CSS
- **Express** as the Server
- **Sequelize** as your ORM for the **Postgresql** Datastore.
- **Webpack** for generating static assests


## Setting Up Project

1. Clone with SSH to your local machine
1. Create a database in your psql
1. Rename config_example.json to config.json
  - Fill in appropriate inputs
1. Run 'sequelize db:migrate' to import table into your database
1. Run 'sequelize db:seed:all' to import data into your table
1. Run 'npm install'
1. Run 'node server.js' to start your server

### Cards in Columns
When a Card appears in a column there should be a way (something clickable?) to move that card to either the next or previous column.


### Columns (component)
Columns contain Cards and each column is a collection of Cards that share the same status.

The board you will building will have **3 columns**:
  - Queue
    - A card will automatically appear in this column after creation.
  - In Progress
    - When a card is being worked on it should be displayed in this column.
  - Done
    - When work has finished on a card it should be displayed in this column.

**caveat: do not try to implement click-and-drag just yet, save it as a stretch goal!**

### Kanban Board (Main Component)
A Kanban board contains multiple Columns (and Columns contain Cards). This is the main application component. It is responsible for retreiving data and *passing it down* to other child components.

### Server
Build an Express server which will serve your `index.html` and static assets.

#### Routes

Your server will have these routes:
  - RESTful API endpoints to create, read, update, and delete kanban cards for your application.
    - Remember to use MVC architechture: Models, Views, Controllers!
  - One route to

### Database
MongoDB and Mongoose (ORM). Create a UML Schema for your database, consider [LucidChart](https://www.lucidchart.com/). Add these diagrams to your project.

### Styles
Make It Pretty!™

#### Responsive Layout
- create a desktop and mobile view. Tablet view is not needed (possible stretch goal).

## References

### Kanban Servies

[Trello](http://www.trello.com)

[Taiga](http://www.taiga.io)

[Asana](http://www.asana.com)
