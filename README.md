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

French themed Big Fernand Burger logger enabled via MySQL, Node, Express. Organized as a MVC (Model View Controller) targetting Handlebars, plus using a homemade ORM (Object-relational Mapper). 

<ul>
<li>The MySQL Employee Management Tracker Application allows for the creation and maintenance of an employee database, ideal for company management.</li>
<li>The application is powered by Node.js to allow for JS execution outside of the browser (Mac Terminal window), Express (Get/Post Requests between REST 'REpresentational State Transfer' APIs), Inquirer (for information collection), Console.table (for a clean table display) and a MySQL database which stores the information created, read, updated or deleted (CRUD).</li>
<li>The MySQL database, stored in the db folder as <strong>schema.sql</strong>, can be initiatied via Terminal or, more simply, via MySQL Workbench (GIF/MP4).</li>
<li>In addition of the database schema, the db folder also contains a <strong>seed.sql</strong> file which will populate the database at startup so that it doesn't show empty.</li>
<li>Like the database, the seed.sql file can be executed via Terminal or via MySQL Workbench, it contains the names of 19 Atari Inc. key employees (1972-1984) such as Jay Miner or Joe Decuir.</li>
<li>The end user, via the Terminal Command-Line Interface, is allowed all four CRUD stages:
  <ul>
    <li>(Create) Add departments, roles, employees.</li>
    <li>(Read) View departments, roles, employees.</li>
    <li>(Update) Update employee roles.</li>
    <li>(Delete) Delete employees.</li>
  </ul>
</li>
</ul>
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, bonus functions in development, .DS_Store.</li>
<li>For this application to execute properly:
  <ol>
  <li>Oracle's MySQL must be installed and running in the background as seen in the System Preferences photo below. The application will not run correctly otherwise. Please make note of the <strong>password</strong> associated with your MySQL install as it will be required by the application. Newcomers to MySQL will gain information from reading the following article: https://www.thoughtco.com/installing-mysql-on-mac-2693866</li>
  <li>The end user must execute the package.json file via the npm install command (Terminal). This will install the required dependencies (Express, Inquirer, MySQL, Console.Table) needed for the program to run. This package is located in the application root folder and must be executed <i>in situ</i> prior to running the application (see Instructions).</li>
  </ol>
</li>
</ul>

![MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)](./demo_assets/ucla-hw12-mysql-employee-management-tracker-application-0-mac-system-preferences-mysql-running-in-background.png "MySQL Employee Management Tracker Application — MySQL Background Execution / Mac OSX System Preferences (PNG)")
<p>Fig. 0. MySQL runs in the background as seen in the MySQL maintenance panel located in System Preferences (Apple Macintosh).</p>

## Instructions
<ul>
<li>Makes sure MySQL is properly installed, password initiated and running in the background as seen in the Details section illustration above.</li>
<li>In MySQL Workbench, load the schema.sql file, located in the application db folder, then initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>Still in MySQL Workbench, locate the seed.sql file in the application db folder then, as in the prior step, initiate it by clicking on the lightning bolt (GIF/MP4).</li>
<li>In the Application folder, open <strong>app.js</strong> in a text / code editor, add your MySQL Password on line 17 between the password quotation marks.</li>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd mysql-employee-management-tracker-application</li>
<li>Run the 'npm install' command to install the necessary node modules from the package.json.</li>
<li>Run the 'node app.js' command to launch the application in Terminal (GIF/MP4).</li>
<li>Once the application is running, you can exert all four CRUD privileges (Create Read Update Delete):
  <ol>
    <li>Creation: Create departments, roles, employees.</li>
    <li>Reading: Read departments, roles, employees.</li>
    <li>Updating: Update employee roles.</li>
    <li>Deletion: Delete employees.</li>
  </ol>
<li>The application can be closed from the main menu by selecting the 'Leave' option.</li>
</ul>

<p><i>Refer to app.js (javascript file) for code dissection.</i></p>

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