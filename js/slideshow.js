// <![CDATA[
var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'img/foto1.jpg';
images[1] = 'img/foto2.jpg';
images[2] = 'img/foto3.jpg';
images[3] = 'img/foto4.jpg';
images[4] = 'img/foto5.jpg';
images[5] = 'img/foto6.jpg';
images[6] = 'img/foto7.jpg';
images[7] = 'img/foto8.jpg';

 
var preLoadImages = new Array();
for (var i = 0; i < images.length; i++)
{
   if (images[i] == "")
      break;
 
   preLoadImages[i] = new Image();
   preLoadImages[i].src = images[i];
   imageCount++;
}
 
function startSlideShow()
{
   if (document.body && imageCount > 0)
   {
      document.body.style.backgroundImage = "url("+images[currentImage]+")";    
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout('startSlideShow()', 3000);
   }
}
startSlideShow();
// ]]>