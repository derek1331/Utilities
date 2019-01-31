import React from "react";
import "./cardReveal.css";

class CardReveal extends React.Component {

componentWillMount(){

//     unirest.get("https://api-nba-v1.p.rapidapi.com/seasons/")
// .header("X-RapidAPI-Key", "a5ed3c4065msh07c2653d2b37002p14321djsn8ce82dee7c2e")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
        fetch(
          "https://api-nba-v1.p.rapidapi.com/seasons/",
          {
            headers: {
                "X-RapidAPI-Key": "a5ed3c4065msh07c2653d2b37002p14321djsn8ce82dee7c2e"
            },
          },
        )
          .then(res => res.json())
          .then(res => {
            console.log(res);
          });
      ;
}


  render() {
    return (
      <div>
        <div className="firstCard" id="firstCard">
          <img className="firstImage" id="firstImage" />
          <span className="firstSpan" id="firstSpan" />
        </div>
        <div className="secondCard" id="secondCard" />
      </div>
    );
  }
}

export default CardReveal;
