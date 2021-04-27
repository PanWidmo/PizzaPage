var slider_content = document.getElementById('slider');

    // contain images in an array
  var image = ['a','b', 'c', 'd'];

  var i = image.length;


  // function for next slide 

  function nextImage(){
      if (i<image.length) {
          i= i+1;
      }else{
          i = 1;
      }
        slider_content.innerHTML = "<img src=./imgs/"+image[i-1]+".jpg>";
  }


  // function for prew slide

  function prevImage(){

      if (i<image.length+1 && i>1) {
          i= i-1;
      }else{
          i = image.length;
      }
        slider_content.innerHTML = "<img src=./imgs/"+image[i-1]+".jpg>";

  }
