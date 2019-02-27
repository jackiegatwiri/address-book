function Contact (first, last){
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function(){
  $("#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();
    var newContact = new Contact(inputtedFirstName,inputtedLastName);
    $("#contacts").append("<li><span class='contact'>"+newContact.fullName()+"</span></li>");
    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $(".contact").last().click(function(){
      $("#show-contact").show();
      // $("#show-contact h2").text(newContact.firstName);
      $("#show-contact h2").text(newContact.lastName);

      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
