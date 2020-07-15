var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
    // MessagesView.handleClick();
  },

  render: function (msgs) {
    // msgs => 100 array
    _.chain(msgs)
      // <--- filter out the ones without username;
      .filter(msg => msg.roomname)
      // .filter(msg => Rooms.isSelected(msg.roomname))
      .forEach(msg => RoomsView.renderRoom(msg.roomname))
      .forEach(msg => MessagesView.renderMessage(msg))
  },
  handleClick: function (event) {
    var username = $(event.target).text()
    console.log(username)
    Friends.toggleStatus(username, MessagesView.render)
  },
  renderMessage: function (message) {
    // debugger;
    var $message = MessageView.render(message);
    // console.log($message)

    MessagesView.$chats.append($message);
  }

};