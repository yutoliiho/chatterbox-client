var Friends = {
  friend_data: [],

  isFriend: function (name) {
    return Friends.friend_data.includes(name)
  },
  toggleStatus: function (name) {
    if (!Friends.friend_data.includes(name)) {
      Friends.friend_data.push(name)
    }
    return true;
  }
}