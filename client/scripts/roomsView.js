// view && controller;

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$select.on('change', RoomsView.handleChange)
    RoomsView.$button.on('click', Rooms.add);
  },
  // handleClick: function (event) {
  //   Rooms.selected = RoomsView.$select.val();
  //   Rooms.selected = prompt('Give new room a name' || 'newRoom');
  //   console.log(Rooms.selected)
  //   RoomsView.renderRoom(Rooms.selected)
  // MessagesView.render();
  // },
  handleChange: function (event) {
    // Rooms.selected = RoomsView.$select.val();
    // console.log(Rooms.selected)

    // render the new room
    // change to the new room(click function needed)

  },
  render: function () {
    //
  },
  renderRoom: function (roomname) {
    // var $option = $('<select value="${roomname}">${roomname}</select>');
    // console.log(rooomname)
    var $option = $('<option>').val(roomname).text(roomname)
    RoomsView.$select.append($option);
  }
};
