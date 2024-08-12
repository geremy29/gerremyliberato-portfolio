console.log('hello world')

// var prompt= prompt('what is your name?');

console.log(prompt)

// if(10>9){
// console.log('yes ten is greater than 9');
// }else{
//   console.log('nuh uh')
// }




function areyouoldEnough (age) {
  var age= prompt('what is your age?');

  if (age < 18 && typeof age === "string") {
    alert('goo goo gaa gaa?')
  } else if (age>=18 && age <=60){
    alert('im fine with that')
  } else {
    alert('what were the dinosaurs like?')
  }
}


function introduction (age, name, location) {
  console.log (name)
  console.log (age)
  console.log (location)
  console.log ('my age is '+ age + ' my name is '+ name + ' and i live in '+ location)
}

 introduction(15, 'bob', 'the bronx') 

function uploadandidentifyPLANTID() {
  // get the photo from the input button
  var photoinput = document.getElementById('photoInput');
  console.log(photoinput)
  console.log(photoinput .files[0])

  // if no photo was added and they press sumbit you better tell them off big man

  if (photoinput.files.length ===0) {
    alert ('add a photo NOW');
    return 
  }

  var selectedFile = photoInput.files[0];

    var Reader = new FileReader();

  // Set up event handeler when the submit button is clicked to read the file and set up the API call
    Reader.onload = function (e){
      // Store image in a var
     var base64image = e.target.result;
    console.log(base64image);

// create varibales from the api call
      
      var apikey = 'MsyfBz4bd54Pa6GTQCvcnwrtU1TG7ULrSDFAeJZSiCklzEBpaA';
      var latitude = 49.207;
      var longitude = 16.608
      var health = 'all';
      var SimliarImages = true;
      var details = 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods,treatment,cause';
      var language = 'en';
      var apiPLANTIDurl = `https://plant.id/api/v3/identification?details=${details}&language=${language}`;  
    }
// make our first api call to plant id database
//   with base64 Image
  axios.post(
    apiplantIDUrl,
    {
      Image: [base64Image],
       latitude: latitude,
       longitude: longitude,
       health: health,
      SimliarImages: SimliarImages
    },
    {
      Headers: {
        'APi-Key': apikey,
        'Content-Type': 'application/json'
      }
    }
  )
}
