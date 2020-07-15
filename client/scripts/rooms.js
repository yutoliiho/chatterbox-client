// model/Rooms.js
// handle all data related to rooms;


var Rooms = {
  // adding room
  data: [],
  // function {// get all the rooms? }
  // push data;
  selected: 'lobby',

  isSelected: function (roomname) {
    return roomname === Rooms.selected ||
      !roomname && Rooms.selected === 'lobby';
  },

  add: function (event) {
    // Rooms.selected = RoomsView.$select.val();
    Rooms.selected = prompt('Give new room a name');
    console.log(Rooms.selected)
    RoomsView.renderRoom(Rooms.selected)
    // // MessagesView.render();
  }


};