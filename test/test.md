## set
```
curl -X POST \
  http://localhost:4501/set \
	  -H 'Content-Type: application/json' \
  -H 'Postman-Token: da715208-5bcb-4996-a860-7d8bd385ee2e' \
  -H 'appid: 59e6b71d5fbca4f8e605fef0' \
  -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' \
  -H 'cache-control: no-cache' \
  -d '{
"key": "account:1",
	"value": {
	"account": {
		"id": 1,
			"name": "fedor"
	},
	"nonce": "#Dfds#$$533"
}
}'
```

## get
```
curl -X GET 'http://localhost:4501/get/account:1' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' | python -m json.tool
```

## remove
```
curl -X DELETE 'http://localhost:4501/remove/account:1' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' | python -m json.tool
```

## clear
```
curl -X POST 'http://localhost:4501/clear' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' | python -m json.tool
```