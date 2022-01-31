# PokemonDirectory
This app Lists the pokemons with all their details and a special page is dedicated to legendary Pokemons.

This applcation is built using node.js and My sql Db.

**The Pokemon CSV data is pulled from this link-> _https://drive.google.com/file/d/0B2KYfCNc8Q_rTm8tanJZTXhJUU0/view?resourcekey=0-CLpWUvGpuqmTEYJaMEEu8Q_
and added to the Mysql db which is present locally**


Add the data to Mysql Db by Running the below command.

>cd pokeDex // Navigate to project directory

>node extract.js // this will add the downloded csv data to mysql db.

**caveat: Make sure that you create database "Assignment"(or name it as per convenience) before running the above command**

Once the data is inserted ,Start the appication by running the below command

>node app.js

>Now you can access the app using the below URL: http://localhost:3000/pokemon-list


