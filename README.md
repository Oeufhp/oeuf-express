Example of Clean Architecture:

- https://medium.com/swlh/clean-architecture-a-little-introduction-be3eac94c5d1
- https://www.oncehub.com/blog/explaining-clean-architecture

<img src="https://miro.medium.com/max/1050/1*cgJSwLqnHvY5nrhdu4AsFA.jpeg" alt="Clean Architecture" width="500"/>

Example of Hexagonal Architecture:

- https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749

<img src="https://miro.medium.com/max/1050/1*NfFzI7Z-E3ypn8ahESbDzw.png" alt="Hexagonal Architecture" width="500"/>

### Folder Structure

`src` folder is the main folder to store the source code. There are 4 sub-folders inside are as follows:

- `adapters` - is the data source layer that manages external dependencies and converts/maps external data to models (entities).
- `api` - is one of the transport layer (this project based on Backend API) if there is any other transport layer. new folders can be created e.g., message_queue, sqs.
  the transport layer handles the request from clients and convert them into models (entities) or objects that `service` required. The mandatory parameters may validate in this layer
- `models` - is the entities layer that will be used in the project.
- `services` - is the business logic layer that allows to work only with models. Business logic validations are also implemented in this layer.

### Domain

- `model` is similar to entities in Clean/Hexagonal Architecture
- `service` is similar to interactors or use cases in Clean/Hexagonal Architecture
- `adapter` is similar to repositories or gateways in Clean/Hexagonal Architecture

### API Versioning

We recommend always implement versioning for the API. However, the solutions to approach API version depends on each project.

### Example

This template contains an example of an API call to get a user by id

- Client calls `GET` to `v1/user/:id`
- As in `app.js` the route start from `src/api/index.js` which contains all the version of the API
- In `src/api/v1/index.js` contains all the main functional route, in this case `user`
- In `src/api/v1/user_route.js` is the actual transport layer that contains all the API for users (e.g. create, update, delete, get, list).
  In the transport layer needs to extract all the parameter the service needs from the request body. the validation may implement if the required object does not exist.
- Then the transport layer passes the extracted parameters to the business layer which is in `src/services` in this case `user_service.js`.
- `get_user` method contains business logic and validations only about get a user.
  As the `service` layer will be called by many transport layer (e.g. API, Message Queue), `service` need to validate the input from the caller.
  In this case, the `id` needs to be a number.
- If the error found, the `error` object with a message need to return back to the transport layer
- `service` interacts with `adapter` to retrieve the data from data sources or external sources
- `adapter` encapsulates the data sources. The data sources may from external APIs or databases.
  It needs to convert/map the data into a `model`
  `adapter` can be implemented in various ways depends on the data sources.
  However, it needs to be able to convert/map the data into `model`.
- When the transport layer got the response back from the `service`, it needs to check the data and respond back to the client accordingly.
  If the response is `null` the API needs to return Http Status = `404`
- In case of error the handler needs to differentiate if it's `Bad Request`, `Server Error`, etc.
