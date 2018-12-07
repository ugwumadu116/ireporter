[![Maintainability](https://api.codeclimate.com/v1/badges/e24905f96622af17a6c7/maintainability)](https://codeclimate.com/github/ugwumadu116/ireporter/maintainability)
[![Build Status](https://travis-ci.org/ugwumadu116/ireporter.svg?branch=develop)](https://travis-ci.org/ugwumadu116/ireporter)
[![Coverage Status](https://coveralls.io/repos/github/ugwumadu116/ireporter/badge.svg?branch=develop)](https://coveralls.io/github/ugwumadu116/ireporter?branch=develop)
# ireporter
iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that needs government intervention


## Features

### Users

- Signup and Login
- Create a Report 
- Modify a Report
- View their Report History
- Delete a Specific Report
- Get All Reports
- Get a Specific Report

### Admin

- Edits the State of a Report
- Delete a Report
- Get All Reports for all Users
- Get All Reports for a Specific User

## Installation

Clone repo to your local machine:

```git
git clone https://github.com/ugwumadu116/ireporter
```

**Install dependencies and run locally**<br/>

```
npm install
```

Create .env like the .env.sample file, just replace with your own enviroment variables.

Now start the server:

```npm
npm start
npm start-dev     /* Keep watching files for changes */
```

## Testing

To run tests:

```npm
npm test
```

## API

API is deployed at [here](https://bootcamp-andela-ireporter.herokuapp.com/) on heroku.

### API Routes

<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/auth/signup</td> 
		<td>Create user account</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/auth/signin</td> 
		<td>Sign in to user account</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/auth/signup</td> 
		<td>Create user account</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/admin/login</td> 
		<td>Sign in to Admin account</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/red-flags</td> 
		<td>Get all red-flags</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/red-flags/:redflagId</td> 
		<td>Get a red-flag</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/red-flags</td> 
		<td>Add new red-flags</td>
	</tr>
	<tr>
		<td>PUT</td>
		<td>/api/v1/red-flags/:redflagId</td> 
		<td>Update or modify red-flag</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/red-flags/:redflagId</td> 
		<td>Delete red-flag</td>
	</tr>    
    <tr>
		<td>GET</td>
		<td>/api/v1/interventions</td> 
		<td>Get all interventions</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/interventions/:interventionId</td> 
		<td>Get a intervention</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/interventions</td> 
		<td>Add new interventions</td>
	</tr>
	<tr>
		<td>PUT</td>
		<td>/api/v1/interventions/:interventionId</td> 
		<td>Update or modify intervention</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/interventions/:interventionId</td> 
		<td>Delete intervention</td>
	</tr>
</table>
