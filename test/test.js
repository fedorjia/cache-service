// set
// curl -X POST 'http://localhost:4001/set' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' -d 'key=name&value=fedorjia' | python -m json.tool

// get
// curl -X GET 'http://localhost:4001/get/name' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' | python -m json.tool

// remove
// curl -X DELETE 'http://localhost:4001/remove/name' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' | python -m json.tool

// clear
// curl -X POST 'http://localhost:4001/clear' -H 'appid: 59e6b71d5fbca4f8e605fef0' -H 'appsecret: 835da6856e5aeb0c39baa7c4dd7aede0' | python -m json.tool
