function showSuggest(max, step) {

  var html = '<ul>';
  for (i = 0; i < 5; i++) {
    var suggestPrice = max + step * (i+1);
    html += '<li><button type="button" class="btn btn-primary col-md-12 col-ms-12"  onclick=bidWithPrice('+suggestPrice+')  value="'+ suggestPrice +'">$' + suggestPrice + '</button></li>';
  }
  html += '</ul>';
  document.getElementById('show-suggest-price').innerHTML = html;

}
function bidWithPrice(price){
  console.log(price);
  
}
