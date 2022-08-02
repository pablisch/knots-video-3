const knots = document.querySelectorAll(".overlay");
const links = document.querySelectorAll(".link");

console.log(links);

document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
      backToTop();
  }
});

knots.forEach(knot => {
  knot.addEventListener('click', chooseVideo => {
    let knotID = chooseVideo.target.id
    // console.log(knotID);
    workOutVidIDfromPanel(knotID);
  })
  
});

links.forEach(link => {
  link.addEventListener('click', chooseVideo => {
    let linkID = chooseVideo.target.text
    console.log(linkID);
    workOutvidIDfromLink(linkID);
  })
  
});

function whichVideo(vidSrc) {
  // console.log(document.querySelector('#videoPlaying').src);
  document.querySelector('#videoPlaying').src = vidSrc;
  // console.log(document.querySelector('#videoPlaying').src);
  window.scrollTo(0, document.body.scrollHeight);
}

function workOutVidIDfromPanel(whichKnot) {
  let vidID = whichKnot == 'tarp' ? 'OsesfBOQ_Nc' : whichKnot == 'tarp2' ? 'OsesfBOQ_Nc'  
    : whichKnot == 'timber' ? 'OsesfBOQ_Nc' : whichKnot == 'timber2' ? 'OsesfBOQ_Nc'   
    : whichKnot == 'clove' ? 'Bl9DLOFJJ4A' : whichKnot == 'clove2' ? 'Bl9DLOFJJ4A'
    : whichKnot == 'taut' ? 'MUBRINtBDPk' : whichKnot == 'taut2' ? 'MUBRINtBDPk'
    : whichKnot == 'figure' ? 'mjptxOrdr_g' : whichKnot == 'figure2' ? 'mjptxOrdr_g'
    : whichKnot == 'bowline' ? '0F4HrjeIsYY' : whichKnot == 'bowline2' ? '0F4HrjeIsYY'
    : whichKnot == 'reef' ? '4tE_L5I3Z7U' : whichKnot == 'reef2' ? '4tE_L5I3Z7U'
    : whichKnot == 'round' ? 'ZhTOt1GcFGI' : whichKnot == 'round2' ? 'ZhTOt1GcFGI'
    : whichKnot == 'sheet' ? 'o9Kgs4PdPiw' : whichKnot == 'sheet2' ? 'o9Kgs4PdPiw'
    : whichKnot == 'square' ? 'z-lydqHKVdw' : whichKnot == 'square2' ? 'z-lydqHKVdw'
    : 'OsesfBOQ_Nc'
  // console.log(vidID);
  let vidSrc = `https://www.youtube.com/embed/${vidID}?rel=0`
  console.log(whichKnot);
  console.log(`src is ${vidSrc}`);
  // setInterval(reload, 1000);
  whichVideo(vidSrc);
}

function workOutvidIDfromLink(whichLink) {
  let vidID = whichLink == 'TarpTidy' ? 'OsesfBOQ_Nc' 
    : whichLink == 'TimberHitch' ? 'OsesfBOQ_Nc'
    : whichLink == 'CloveHitch' ? 'Bl9DLOFJJ4A'
    : whichLink == 'Taut TarpHitch' ? 'MUBRINtBDPk'
    : whichLink == 'FigureEight' ? 'mjptxOrdr_g'
    : whichLink == 'BowlineKnot' ? '0F4HrjeIsYY'
    : whichLink == 'ReefKnot' ? '4tE_L5I3Z7U'
    : whichLink == 'Round Turn &Two Half Hitches' ? 'ZhTOt1GcFGI'
    : whichLink == 'Sheet Bend &Double Sheet Bend' ? 'o9Kgs4PdPiw'
    : whichLink == 'SquareLashing' ? 'z-lydqHKVdw'
    : 'OsesfBOQ_Nc'
  console.log(vidID);
  let vidSrc = `https://www.youtube.com/embed/${vidID}?rel=0`
  console.log(`src is ${vidSrc}`);
  whichVideo(vidSrc);
}

function backToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}



