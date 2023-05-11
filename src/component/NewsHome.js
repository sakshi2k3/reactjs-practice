import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class NewsHome extends Component {
  articals = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Josh Campbell,Ed Lavandera,Elizabeth Wolfe,Sara Smart",
      title:
        "New details emerge about Texas outlet mall shooter as investigators continue to probe for motive - CNN",
      description:
        "As investigators continue to probe for a motive in the mass shooting that left eight people dead and at least seven others wounded at a Texas outlet mall, details of the gunman's background have begun to surface, including extremist social media postings, a s…",
      url: "https://www.cnn.com/2023/05/08/us/allen-texas-mall-shooting-gunman-monday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230507160910-14-allen-texas-outlet-mall-active-shooter-050723.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-08T10:25:00Z",
      content:
        "As investigators continue to probe for a motive in the mass shooting that left eight people dead and at least seven others wounded at a Texas outlet mall, details of the gunmans background have begun… [+6905 chars]",
    },
    {
      "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
      },
      "author": "Gerrit De Vynck",
      "title": "Google's I/O conference will be a key test of its AI strategy - The Washington Post",
      "description": "Google is rushing to regain its lead in the AI arms race. The company's annual I/O conference will be a key test for the tech giant.",
      "url": "https://www.washingtonpost.com/technology/2023/05/09/google-io-ai-products/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3HSFPZTKXAI6RIZVYRID2BA6V4.jpg&w=1440",
      "publishedAt": "2023-05-09T12:42:55Z",
      "content": "Comment on this story\r\nComment\r\nOn Wednesday, Google is holding its annual conference to showcase its latest innovations a 15 year-old ritual that this time around is upset by the tech giants suddenl… [+6316 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "FOX 4 News"
      },
      "author": "FOX 4 Staff",
      "title": "Allen Outlets Shooting: Officer who killed gunman processing tragedy - FOX 4 News Dallas-Fort Worth",
      "description": "The Allen police officer who killed the gunman in Saturday’s mass shooting at Allen Premium Outlets is asking for privacy as he continues to process the life-altering tragedy.",
      "url": "https://www.fox4news.com/news/allen-outlets-shooting-officer-who-killed-gunman-processing-tragedy",
      "urlToImage": "https://images.foxtv.com/static.fox4news.com/www.fox4news.com/content/uploads/2023/05/1280/720/snapshot-43-1.jpg?ve=1&tl=1",
      "publishedAt": "2023-05-09T12:40:02Z",
      "content": "ALLEN, Texas - The Allen police officer who killed the gunman in Saturday’s mass shooting at Allen Premium Outlets is asking for privacy.\r\nThe officer has not yet been publicly identified.\r\nAn attorn… [+1424 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "YouTube"
      },
      "author": null,
      "title": "China retaliates against Canada by ordering Shanghai-based Canadian diplomat to leave - South China Morning Post",
      "description": "Subscribe to our YouTube channel for free here: https://sc.mp/subscribe-youtubeFor the latest coverage: https://sc.mp/rgo9 Shanghai-based Canadian envoy Jenn...",
      "url": "https://www.youtube.com/watch?v=hczocGm4fvY",
      "urlToImage": "https://i.ytimg.com/vi/hczocGm4fvY/maxresdefault.jpg",
      "publishedAt": "2023-05-09T12:36:59Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Sarah Min",
      "title": "Stocks making the biggest moves premarket: Palantir, Skyworks, Under Armour & more - CNBC",
      "description": "These are the stocks posting the largest moves in early trading.",
      "url": "https://www.cnbc.com/2023/05/09/stocks-making-the-biggest-moves-premarket-palantir-skyworks-under-armour-more.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106805361-1606944602892-gettyimages-1228810171-PALANTIR_NYSE.jpeg?v=1683635129&w=1920&h=1080",
      "publishedAt": "2023-05-09T12:25:29Z",
      "content": "Check out the companies making headlines before the bell:\r\nPalantir Technologies Shares of Palantir rose nearly 20% after the enterprise computing firm best known for its data mining platforms releas… [+3851 chars]"
  },
    {
      source: {
        id: null,
        name: "WABC-TV",
      },
      author: null,
      title:
        "Protestors of Jordan Neely's death sought by police for jumping onto subway tracks - WABC-TV",
      description:
        "As police search for trespassers in the protest, the public awaits whether a grand jury will charge Daniel Penny for putting Neely in the deadly chokehold.",
      url: "https://abc7ny.com/jordan-neely-daniel-penny-chokehold-death-protests/13222862/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/13222956_050823-wabc-protests-img.jpg?w=1600",
      publishedAt: "2023-05-08T10:18:01Z",
      content:
        "UPPER EAST SIDE, Manhattan (WABC) -- A handful of protestors of Jordan Neely's death are being sought by police for jumping onto the subway tracks and disrupting service over the weekend.\r\nThe marine… [+2893 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Maureen Groppe",
      title:
        "Biden looks to McConnell in debt ceiling fight with Speaker McCarthy - USA TODAY",
      description:
        'President Biden and Mitch McConnell found a way out of the 2011 debt limit crisis. Can the "odd couple" do it again?',
      url: "https://www.usatoday.com/story/news/politics/2023/05/08/biden-mcconnell-debt-ceiling-fight-speaker-mccarthy/70185363007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/01/10/USAT/43c6c168-7d7e-4b6b-a9ea-6956ab82aff3-McConnell_Biden.jpg?crop=5999,3374,x1,y572&width=3200&height=1800&format=pjpg&auto=webp",
      publishedAt: "2023-05-08T09:20:00Z",
      content:
        "WASHINGTON As Republicans took control of the House in January amid a chaotic fight over who would lead them, President Joe Biden made a point of showcasing his ability to work with Senate Minority L… [+5874 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Landon Mion",
      title:
        "Department of Transportation to propose requirements for airlines to compensate stranded passengers - Fox Business",
      description:
        "The Department of Transportation announced plans to require airlines to provide compensation and cover expenses for amenities when flights are delayed or canceled.",
      url: "https://www.foxbusiness.com/economy/department-transportation-propose-requirements-airlines-compensate-stranded-passengers",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/12/0/0/pete-buttigieg-transportation-secretary-department-biden-administration.jpg?ve=1&tl=1",
      publishedAt: "2023-05-08T09:10:45Z",
      content:
        "The Department of Transportation announced Monday its plans for a new rulemaking process requiring airlines to compensate passengers whose flights were delayed or canceled.\r\nThe proposal would requir… [+4449 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nouran Salahieh,Tina Burnside",
      title:
        "More than 29,000 people are evacuated from communities throughout Alberta as wildfires rage in Canada - CNN",
      description:
        'More than 100 wildfires raging across the Alberta region of Canada have forced more than 29,000 people to flee in what officials have called an "unprecedented situation" for the province.',
      url: "https://www.cnn.com/2023/05/08/weather/alberta-canada-wildfires-monday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230508131339-03-alberta-canada-wildfires.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-08T08:23:00Z",
      content:
        "More than 100 wildfires raging across the Alberta region of Canada have forced more than 29,000 people to flee in what officials have called an unprecedented situation for the province.\r\nIn the past … [+4453 chars]",
    },

    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Closer to Earth Than Ever Before: MIT Astronomers Detect Black Hole Devouring a Star - SciTechDaily",
      description:
        "The event was spotted in infrared data — also a first — suggesting further searches in this band could turn up more such bursts. MIT astronomers have discovered a new tidal disruption event in infrared, providing insights into how supermassive black holes rip…",
      url: "https://scitechdaily.com/closer-to-earth-than-ever-before-mit-astronomers-detect-black-hole-devouring-a-star/",
      urlToImage:
        "https://scitechdaily.com/images/Star-Spaghettification-Black-Hole.gif",
      publishedAt: "2023-05-08T01:42:11Z",
      content:
        "ByJennifer Chu, Massachusetts Institute of TechnologyMay 7, 2023\r\nThis animation depicts a star experiencing spaghettification as its sucked in by a supermassive black hole during a tidal disruption … [+11325 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articals: this.articals,
      
    };
  }
 
  async componentDidMount(){
    let url = "https://newsdata.io/api/1/news?apikey=pub_2198657a78e389d184057fe092bed25eb7c2b&q=india";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articals : parseData.articals});
  }
  render() {
   
    return (
      <div>
        <div className="container my-3">
          <h1 className="h3">Look our Top Headlins</h1>

          <div className="row">
              {this.state.articals?.map((element) => {
              return (
                <div className="col-md-4 mt-4">
                  <NewsItem
                   key={element.url}
                    title={element.title ? element.title.slice(0, 45): ""}
                    description={
                      element.description ? element.description.slice(0, 88) : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })} 
          </div>
        </div>
      </div>
    );
  }
}

export default NewsHome;


