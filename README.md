# DutchTreat
Simple web application using Angular 10, BootStrap 4 with CSS, Asp.Net Core 3.1.6 and EF core 3.1.6

<h2>Run application</h2>
<p>After downloading or cloning this repository, first you have to do, is navigate to Project-folder and run 
<a href="https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-restore"> dotnet restore</a> command in Terminal to install all necessary nuget packages, then (or if you want before) run
<a href="https://docs.npmjs.com/cli/install">npm install</a> to install npm packages, of course 
<a href="https://nodejs.org/en/download/">node.js</a> must be already installed. Also you need to have mssql server installed on your machine, or just use docker image instead
(<a href="https://hub.docker.com/_/microsoft-mssql-server">link to image</a>).<br>
To generate database just run 
<a href="https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli">dotnet ef database update</a> in your terminal (all migrations are allready created). 
After first running this application
(for example with <a href="https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-build">dotnet build</a> and then 
<a href="https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run">dotnet run</a>), database will be seeded with neccessary data. The application will run on <u>http://localhost:5555</u>.</p> 
<h2>Startpage</h2>
<p>URL of Startpage is http://localhost:5555. After click on "Discover our Orders" you will be redirected to Shop Page</p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/start_page.gif"/>
<h2>Shop Page</h2>
<p>"Checkout" will be shown after adding a product/article to the Shopping Cart.<br> 
After click on Checkout Button, in case you are not loged in, you will be redirected to Login Page, otherwise directly to your Shopping Cart</p></p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/shop.gif"/>
<h2>Login</h2>
<p>To login you need enter <b>"john@doe"</b> as a Username and <b>"P@ssW0rd!"</b> as your password.<br>
After login you will be redirected to your Shopping Cart.</p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/login.gif"/>
<h2>Shopping Cart</h2>
<p>In your Shopping Cart you have the possibility to <br><br> ...delete order item...</p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/delete_from_order.gif"/>
<p>...cancel current order and continue shopping (shopping cart will be not emptied)... </p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/cancel_order.gif"/>
<p>...purchase your order and continue shopping. Your order will be saved in the database in order and orderItems tables and you will be redirected to the Shop Page...
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/purchase_order.gif"/>
<h2>Contact Page</h2>
<p>Message will be sent local by using a "DummyMailService" (take a look in /DutchTreat/Services/DummyMailService.cs and /DutchTreat/Controllers/AppController.cs)</p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/contact_page.gif"/>
<p>Result</p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/Screenshot_20200804_115904.png" />
<h2>About Page</h2>
<p>This page do not contain any functionality, just a InfoPage with css design.</p>
<img src="https://github.com/VChouliak/gifs_demo/blob/master/DutchTreat/about_page.gif"/>
<h2>P.S.</h2>
This project contains another for BackEnd implemented CRUD-Methods (take a look for example OrderController.cs), wich can be used for the extention of current application.
To begin created Razor-Views and Razor-Pages were not deleted and could be used for implementation or also reimplementation of FrontEnd using razor and c#.
