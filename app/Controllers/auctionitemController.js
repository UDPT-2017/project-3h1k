var auctionitemdb = require("../models/auction_item.js");
var Qs = require('q');

var auctionitemController = {
  loadWithID : function (req, res) {
    var proId = req.params.id;
    console.log("Item: " + proId);
    Qs.all([auctionitemdb.loadWithID(proId), auctionitemdb.loadSellerInfo(proId), auctionitemdb.loadHighestBuyerInfo(proId), auctionitemdb.loadTotalItemSeller(proId),
                    auctionitemdb.loadTotalPersonBid(proId), auctionitemdb.loadBidHistory(proId), auctionitemdb.loadComment(proId)]).spread(function (temp1, temp2, temp3, temp4, temp5, temp6, temp7) {
      //console.log(temp2);
      res.render("_productAuction/item", {
        layout : "application",
        item : temp1,
        seller : temp2,
        highestbuyerid : temp3,
        sellertotalitems : temp4,
        totalPersonBid : temp5,
        bidhistory : temp6,
        comment : temp7
      });
    });
  },
}
module.exports = auctionitemController;
