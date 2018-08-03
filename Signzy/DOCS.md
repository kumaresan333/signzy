# signzy v0.0.0



- [Getdata](#getdata)
	- [Create getdata](#create-getdata)
	- [Delete getdata](#delete-getdata)
	- [Retrieve getdata](#retrieve-getdata)
	- [Update getdata](#update-getdata)
	


# Getdata

## Create getdata



	POST /getdata


## Delete getdata



	DELETE /getdata/:id


## Retrieve getdata



	GET /getdata


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update getdata



	PUT /getdata/:id



