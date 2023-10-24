
// Toggle add info  
document.getElementById('openAddInfo').addEventListener('click', function () {
  document.getElementById('inFoContent').style.display = 'block';
  document.getElementById('openAddInfo').style.display = 'none';
  document.getElementById('closeAddInfo').style.display = 'block';
});

document.getElementById('closeAddInfo').addEventListener('click', function () {
  document.getElementById('inFoContent').style.display = 'none';
  document.getElementById('openAddInfo').style.display = 'block';
  document.getElementById('closeAddInfo').style.display = 'none';
});

// Toggle add Pic  

document.getElementById('openAddPic').addEventListener('click', function () {
  document.getElementById('addPicContent').style.display = 'block';
  document.getElementById('openAddPic').style.display = 'none';
  document.getElementById('closeAddPic').style.display = 'block';
});

document.getElementById('closeAddPic').addEventListener('click', function () {
  document.getElementById('addPicContent').style.display = 'none';
  document.getElementById('openAddPic').style.display = 'block';
  document.getElementById('closeAddPic').style.display = 'none';
});


// Toggle add ads 


document.getElementById('openAddAds').addEventListener('click', function () {
    document.getElementById('addAdsContent').style.display = 'block';
    document.getElementById('openAddAds').style.display = 'none';
    document.getElementById('closeAddsContent').style.display = 'block';
  });
  
  document.getElementById('closeAddsContent').addEventListener('click', function () {
    document.getElementById('addAdsContent').style.display = 'none';
    document.getElementById('openAddAds').style.display = 'block';
    document.getElementById('closeAddsContent').style.display = 'none';
  });
