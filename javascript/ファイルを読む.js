// ファイルリストの読み方
document.getElementById("hoge").addEventListener("change", function(){
var filelist = this.files;

for (var i=0, l=fileList.length; l>i; i++){
  var blobUrl = window.URL.createObjectURL(fileList[i]);
  
  dobument.getElementById("output").innerHTML = '<img src="'+ blobURL +'">';
  }
  });
