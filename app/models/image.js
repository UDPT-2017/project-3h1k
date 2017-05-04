var imgs = [
  {id : 1, url: "/img/background.jpg"},
  {id : 2, url: "/img/BG.jpg"},
  {id : 3, url: "/img/Hien.jpg"},
  {id : 4, url: "/img/Hoc.jpg"},
  {id : 5, url: "/img/logo.png"},
  {id : 6, url: "/img/logo3.png"}
];

var Image = {
  findAll : function () {
    return imgs;
  },
  getOne : function (id) {
    return imgs[id];
  }
}

module.exports = Image;
