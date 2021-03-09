## #13-big-fernand-node-express-handlebars-orm
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>Big Fernand Burger logger enabled via MySQL, Node, Express, Handlebars and a custom made ORM.</h3>

<p>Github Repository Page: https://github.com/palowenstein/big-fernand-node-express-handlebars-orm</p>
<p>Heroku Deployment Page: https://still-bayou-56367.herokuapp.com/</p>

# Table of Contents
  * [GIF](#GIF)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contributions](#Contributions)  
  * [Contact](#Contact)


## GIF
![Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Application Demo (GIF)](./demo_assets/13-big-fernand-node-express-handlebars-orm-application-demo.gif "Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Application Demo (GIF)")
<p>Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Application Demo (GIF)</p>

## Overview
<ul>
<li>The French themed Big Fernand Burger enables 2 types of action:
  <ol>
    <li>Adding a burger via the input field window.</li>
    <li>Moving an available burger (left column) to the "devoured" section (right column) by clicking on its name.</li>
  </ol>
</li>
<li>The application uses a Model View Controller (MVC) targetting the <strong>Handlebars</strong> templating language in its Express version.</li>
<li>A custom made ORM (Object-relational Mapper) is used to connect the object code to the MySQL relational database, creating defacto a virtual object database.</li>
<li>Overall, the program is powered via Node.js, vanilla javascript, Express for GET/POST Requests between REST APIs, a MySQL relational database (either local or remote via an heroku add-on) to hold the burger information, and the previously mentioned MVC, Handlebars, ORM technologies.</li>
<li>The MySQL database, stored in the db folder as <strong>schema.sql</strong>, can be initiated via Terminal or, more simply, via MySQL Workbench.</li>
<li>In addition of the database schema, the db folder also contains a <strong>seeds.sql</strong> file which will populate the database so that the application doesn't show empty when run at first.</li>
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, sensitive database information, Macintosh .DS_Store files.</li>
<li>For this application to execute properly:
  <ol>
  <li>Oracle's MySQL must be locally installed and running in the background as seen in the following System Preferences photo. The application will not run correctly otherwise. Please make note of the <strong>password</strong> associated with your MySQL install as it will be required by the application. Newcomers to MySQL will gain information from reading the following article: https://www.thoughtco.com/installing-mysql-on-mac-2693866</li>
  <li>For the application to execute under <strong>Heroku</strong>, it has to be specifically compiled for Heroku deployment. CLEAR_DB or JAWS_DB_MARIA, both MySQL based and available at no cost to the user, must be installed as a Heroku add-on to substitute for the local database. Either will have to be configurated and the config/connection.js file will need to be updated with the proper remote database information (lines 9-13).</li>
  <li>The end user must first execute the package.json file located in the root folder of the application. This can be done in Apple's Terminal via the npm install command and will install the required dependencies (MySQL, Express, Express-Handlebars, Handlebars) needed for the program to run.</li>
  </ol>
</li>
</ul>

![MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)](./demo_assets/12-mysql-employee-management-tracker-application-0-mac-system-preferences-mysql-running-in-background.png "MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)")
<p>MySQL runs in the background as seen in the MySQL maintenance panel located in System Preferences (Apple Macintosh).</p>

## Instructions
<ul>
<li>Makes sure MySQL is properly installed, password initiated and running in the background as seen in the Details section illustration above.</li>
<li>In MySQL Workbench, load the schema.sql file, located in the application db folder, then initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>Still in MySQL Workbench, locate the seed.sql file in the application db folder then, as in the prior step, initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>In the Application folder, open config/<strong>connection.js</strong> in a text / code editor, add your MySQL Password on line 21.</li>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd big-fernand-burger-logger-mysql-orm-hb</li>
<li>Run the 'npm install' command to install the necessary node modules from the package.json.</li>
<li>Run the 'node server.js' command to launch the application. If executed locally, it will appear as localhost:4000 in your browser.</li>
<li>When run initially, the application will show a selection of 5 burgers ready to be eaten and 1 burger already devoured.</li>
<li>New burgers can be added via the input field window.</li>
<li>Burgers available for consumption will be moved to the "devoured" section when clicked onto.</li>
</ul>

## Screenshots

![Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Running the Application at Startup (JPG)](./demo_assets/13-big-fernand-node-express-handlebars-orm-application-at-startup.jpg "Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Running the Application at Startup (JPG)")
<p>Fig. 1. Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Running the Application at Startup (JPG)</p>
<br />

![Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Adding 'Le Passy' burger via the input field (JPG)](./demo_assets/13-big-fernand-node-express-handlebars-orm-application-at-startup+le-passy.jpg "Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Adding 'Le Passy' burger via the input field (JPG)")
<p>Fig. 2. Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Adding 'Le Passy' burger via the input field (JPG)</p>
<br />

![Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Compiling the application for Heroku deployment (PNG)](./demo_assets/13-big-fernand-node-express-handlebars-orm-heroku-compile.png "Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Compiling the application for Heroku deployment (PNG)")
<p>Fig. 3. Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) — Compiling the application for Heroku deployment (PNG)</p>

## Video
![Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) - Application Demo (MP4)](./demo_assets/13-big-fernand-node-express-handlebars-orm-application-demo.mp4 "Big Fernand Burger Logger (MVC, ORM, SQL, Handlebars) - Application Demo (MP4)")
<br />

## References
<ul>
	<li>ORM Object–Relational Mapping</li>
	<li>MySQL Relational Database Structure.</li>
	<li>Node.js Javascript Library.</li>
	<li>Express for GET/POST/DELETE Requests between REST APIs.</li>
	<li>Handlebars Templating Language</li>
	<li>Package.JSON / NPM for installing dependencies</li>
  <li>Heroku Install: JAWS_DB or CLEAR_DB SQL Database</li>
</ul>

## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2021] Pierre André Lowenstein
</p>

## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

## Contact
<p>
<a href="https://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:coder@pierreandrelowenstein.com" title="Courriel / E-Mail">[e-mail] Send me a 'courriel'</a>
</p>