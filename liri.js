if (process.argv[2] === "mytweets") {

    var  Twitter  =  require('twitter');

    // var client = require("./keys.js");

    var  client  =  new  Twitter({  
        consumer_key:   'orlLruUZKsFYoU7MH8mkL1ibO',
        consumer_secret: 'xWNGQMyX6nbgL1Px1GwUxedlnZyiJruKYz3wWCJV1KEIPx5ZqP',
        access_token_key: '855064851160473601-hUimLCcJQIDoaYXG2MXYTcq4hzUUYEH',
        access_token_secret: 'aOmqwP23mAzrO7YzJUksVlbPhqcMIv4pCjAkybdZf9III',
    });


    var  params  =   { screen_name:   '33Marmar33' };
    client.get('statuses/user_timeline',  params,  function(error,  tweets,  response)  {  
        if  (!error)  {    
            // var transform = require('tweets').transform;

            // var parser = new transform();
            // parse._transform = function(data, encoding, done) {
            //     this.push(data);
            //     done();

            // }
            console.log('text:', tweets); 
            console.log('text:');
            // console.log(response.text);
        }
        // var result = tweets.text
        // console.log(results);
    });

};

if (process.argv[2] === "spotify-this-song") {
    var  spotify  =  require('spotify'); 
    spotify.search({  type:   'track',  query:  process.argv[3] },  function(err,  data)  {    
        if  ( err )  {         console.log('"The Sign" by Ace of Base');         return;     }     
        console.log(data);
    });
};

if (process.argv[2] === "movie-this") {
    var  request  =  require('request');
    request('http://www.omdbapi.com',  function (error,  response,  body)  {  
        console.log('error:',  error);  // Print the error if one occurred 
          
        console.log('statusCode:',  response  &&  response.statusCode);  // Print the response status code if a response was received 
          
        console.log('body:',  body);  // Print the HTML for the Google homepage. 
    });
}
// var queryURL = "https://api.twitter.com/1.1/search/tweets.json?q=%4033marmar33"

// $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//     .done(function(response) {
//         var resultsT = response;
//         console.log(JSON.parse.resultsT)
//     })
// client.stream('statuses/filter', { track: 'twitter' }, function(stream) {
//     stream.on('data', function(tweet) {
//         console.log(tweet.text);
//     });

//     stream.on('error', function(error) {
//         console.log(error);
//     });
// });

// T.get('search/tweets',   {  q:   'banana since:2011-07-11',  count:  100  },  function(err,  data,  response)  {  
//     console.log(data)
// })

// T.get('account/verify_credentials',   {  skip_status:  true  })  .catch(function (err)  {     console.log('caught error',  err.stack)   })  .then(function (result)  {     // `result` is an Object with keys "data" and "resp". 
//          // `data` and `resp` are the same objects as the ones passed 
//          // to the callback. 
//          // See https://github.com/ttezel/twit#tgetpath-params-callback 
//          // for details. 
//           console.log('data',  result.data);   }) 


// T.get('users/suggestions/:slug',   {  slug:   'funny'  },  function (err,  data,  response)  {  
//     console.log(data)
// })

//   console.log(data);
//     console.log(response);
// })