class ToggleLike {
  constructor(t) {
    (this.toggler = t), this.toggleLike();
  }
  toggleLike() {
    $(this.toggler).click(function (t) {
      t.preventDefault();
      let l = this;
      $.ajax({ type: "POST", url: $(l).attr("href") })
        .done(function (t) {
          let e = parseInt($(l).attr("data-likes"));
          1 == t.deleted ? --e : (e += 1),
            $(l).attr("data-likes", e),
            $(l).html(e + " Likes");
        })
        .fail(function (t) {
          console.log("error in completing the request");
        });
    });
  }
}
