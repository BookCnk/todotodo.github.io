$("input[name=toDoItem]").focus(function () {
	$(this).val("");
  });
  
  $("#add").click(function () {
	var $input = $("input[name=toDoItem]").val();
  
	if ($input.length > 0) {
	  $("#list").append("<li class=" + "close" + ">" + $input + "</li>");
	} else {
	  alert("We'd all love to do nothing.");
	}
  
	$("input[name=toDoItem]").val("");
  });
  
  $("#list").on("click", ".close", function () {
	$(this).hide("2000", function () {
	  $(this).remove();
	});
  });
  