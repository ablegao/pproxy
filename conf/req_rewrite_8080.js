if (req.host == "news.163.com") {
	req.host = "news.baidu.com"
	req.host_addr = "127.0.0.1:80"
	req.path = "/h/g.php"
	form_get.add("ga", "aaa")
	form_post.set("a", "ddd")
	req.post["d"] = "ddd"
	req.post["c"] = 123
}
if (req.host == "news.baidu.com" && req.schema=="ws") {
  req.host_addr="127.0.0.1:23456"
}
if(req.host=="www.hao123.com"){
 req.url="http://127.0.0.1/"
}

if(req.host=="www.oschina.net"){
   //use_file("index.htm")
   use_file("http://127.0.0.1:8080/f/index.htm")
}