function post_handler()
{
alert("ouch")

}



function on_doc_ready (){
	$(".post").click(post_handler)
}


$(document).ready(on_doc_ready)