//Exercice 1 -----------

// 3. the data will be appear on the url !

//Exercise 2 : HTML Form #2
// <form action="index.html" method="GET" name="form1" >
//only chnange method="post" --> the data will appear under -inspect - network 

//Exercise 3 : JSON Mario
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  const marioGameJSON = JSON.stringify(marioGame);
  console.log(marioGame);
  console.log(marioGameJSON);
