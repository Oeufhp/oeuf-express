#Sertis Backend NodeJS Template for Starter
The pattern which is used in this template based on Clean Architecture and Hexagonal Architecture. 
This template is just a guideline and minimum required for Sertis Backend NodeJS project, so it's lightweight. 
Feel free to change/install necessary the NPM packages. Feedback and improvement is very welcome.


Example of Clean Architecture: 
* https://medium.com/swlh/clean-architecture-a-little-introduction-be3eac94c5d1
* https://www.oncehub.com/blog/explaining-clean-architecture

<img src="https://miro.medium.com/max/1050/1*cgJSwLqnHvY5nrhdu4AsFA.jpeg" alt="Clean Architecture" width="500"/>

Example of Hexagonal Architecture: 
* https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749

<img src="https://miro.medium.com/max/1050/1*NfFzI7Z-E3ypn8ahESbDzw.png" alt="Hexagonal Architecture" width="500"/>

###Folder Structure
`src` folder is the main folder to store the source code. There are 4 sub-folders inside are as follows:
* `adapters` - is the data source layer that manage external dependencies and convert external data to models (entities). 
* `api` - is one of the transport layer (this project based on Backend API) if there is any other transport layer. new folders can be created e.g., message_queue, sqs. 
  the transport layer
* `models` - is the entities layer which will be used with in the project.
* `services` - is the business logic layer which allows to work only with models. Business logic validations are also implemented in this layer.

###Domain
* `model` is similar to entities in Clean/Hexagonal Architecture


###Example

