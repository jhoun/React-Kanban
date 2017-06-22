# React Kanban
> A digital Kanban board made with React

![alt tag](http://i.imgur.com/r7iC8ni.png)

![kanban_guide_print_kpo_bleed_board2-1024x517](http://i.imgur.com/qzeLiYF.png)

![kanban_guide_print_kpo_bleed_board2-1024x517](http://i.imgur.com/6dgzB53.png)


Did you forget to take out the trash? Next time, use React Kanban to help you set your tasks! Click the New Task button and fill in the appropriate information. Need to edit something or move from "IN PROGRESS” to “DONE" ? Simply click the Edit button to change it up. Don’t want to see the task anymore? Hit the Delete button.

> "The Kanban technique emerged in the late 1940s as Toyota’s reimagined approach to manufacturing and engineering. ... The system’s highly visual nature allowed teams to communicate more easily on what work needed to be done and when. It also standardized cues and refined processes, which helped to reduce waste and maximize value." - [via LeanKit.com](http://leankit.com/learn/kanban/kanban-board/)

## Applications
- **NodeJS**
- **React** & **Redux**
- **SASS**
- **Sequelize** as the ORM for **Postgresql** Datastore.
- **Webpack** for generating static assests


## Setting Up Project

1. Clone with SSH to your local machine
1. Run `npm install`
1. Create a database in your psql
1. Rename config_example.json to config.json
      - Fill in appropriate inputs
1. Run `sequelize db:migrate` to import table into your database
1. Run `sequelize db:seed:all` to import data into your table
1. Run `node server.js` to start your server


1. install dependencies

      `npm install`

1. Create a database in your psql
1. Rename config_example.json to config.json
      - Fill in appropriate inputs
1. Import table into your database

      `sequelize db:migrate`

1. Import data into your table

      `sequelize db:seed:all`

1. Run app

      `node server.js`



## References

### Kanban Services

[Trello](http://www.trello.com)

[Taiga](http://www.taiga.io)

[Asana](http://www.asana.com)
