var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var usernameParam = window.location.search;
    var username = usernameParam.substring(usernameParam.indexOf('=') + 1);
    var text = $('#message').val();
    var roomname = RoomsView.$select.val();
    // console.log(roomname)
    var message = {
      username: username,
      roomname: roomname,
      text: text
    };
    Parse.create(message);
    console.log('click!');
    MessagesView.render(Messages)
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};