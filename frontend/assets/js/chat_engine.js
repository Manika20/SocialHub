class ChatEngine {
  constructor(e, s) {
    (this.chatBox = $("#" + e)),
      (this.userEmail = s),
      (this.messageHistory = {}),
      //(this.socket = io.connect("http://localhost:5000")),
      (this.socket = io()),
      this.userEmail && this.connectionHandler();
  }
  connectionHandler() {
    let t = this;
    this.socket.on("connect", function () {
      //console.log("connection established using sockets..."),
      t.socket.emit("join_room", {
        user_email: t.userEmail,
        chatroom: "SocialHub",
      }),
        t.socket.emit("join_room", {
          user_email: t.userEmail,
          chatroom: "SocialHub",
        }),
        t.socket.on("user_joined", function (e) {
          //console.log("a user joined", e);
        });
    }),
      $("#send-message").click(function () {
        var e = $("#chat-message-input").val();
        "" != e &&
          t.socket.emit("send_message", {
            message: e,
            user_email: t.userEmail,
            chatroom: "SocialHub",
          });
      }),
      t.socket.on("receive_message", function (e) {
        //console.log("message received", e.message);
        var s = $("<li>");
        let o = "other-message";
        e.user_email == t.userEmail && (o = "self-message"),
          s.append($("<span>", { html: e.message })),
          s.append($("<sub>", { html: e.user_email })),
          s.addClass(o),
          $("#chat-messages-list").append(s),
          t.scrollToBottom();
      });
  }
  scrollToBottom() {
    var e = $("#chat-messages-list");
    e.scrollTop(e[0].scrollHeight);
  }
}
