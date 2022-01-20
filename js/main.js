function play() {
  var no = Math.floor(Math.random() * 5);

  var image_name;
  if (no == 0) {
      image_name ="daikichi.png";
  } else if (no ==  1) {
      image_name ="chuukichi.png";
  } else if (no ==  2) {
      image_name ="kichi.png";
  } else if (no ==  3) {
      image_name ="kyou.png";
  } else {
    image_name = "daikyou.png";
  }

  alert("おみくじの結果ですが・・・");
  document.getElementById("omikuji").src = "images/" + image_name;
  document.getElementById("playBtn").innerHTML = "やりなおす";
}