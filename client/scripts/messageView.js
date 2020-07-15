var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username%></div>
        <div class="roomname"><%- roomname%></div>
        <p class="text"><%- text%></p>
      </div>
    `)

};

{/* <div class="roomname"></div>
  <div class="test"></div> */}
// <div></div>

// username
// {{username}}
// ${username}
// <%- username%>
// <%= username%>