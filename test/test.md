## set
```
curl -X POST \
  http://localhost:4501/set \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 468c7877-3f86-4a2a-a98f-517b9a25dd7c' \
  -H 'appid: 59e6b71d5fbca4f8e605fef0' \
  -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' \
  -H 'cache-control: no-cache' \
  -d '{
    "key": "account:1",
    "value": {
       "token": "+gJTGNrJqm717HpQOHl5JJrNjS67XUMevkXbOpfHU9TdMWIIDNOoG3RldRkHdqad",
    	"nonce": "4a80c600d863ff024dbda170",
    	"permissions": ["/asset/add"]
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