import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

const NewsFeed = ({ articles, filters }) => {
  const handleLearnMore = (url) => {
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.click();
  };
  return (
    <div style={{alignContent:'justify'}}>
      {articles &&
        articles.length > 0 &&
        filters === "news_api_org" &&
        articles.map(
          (article) =>
            article &&
            article.title !== "[Removed]" && (
              <Card sx={{ maxWidth: 345, height : 'fit-content', float: "left", margin: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    article.urlToImage && article.urlToImage !== "" || article.urlToImage !==null
                      ? article.urlToImage
                      : "https://newsapi.org/images/n-logo-border.png"
                  }
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <small>
                    Published At:{" "}
                    {moment(article.publishedAt).format("DD-MMM-YYYY")}
                  </small>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleLearnMore(article.url)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            )
        )}

      {articles &&
        articles.length > 0 &&
        filters === "ny_times" &&
        articles.map((article) => (
          <Card sx={{ maxWidth: 345, float: "left", margin: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              src={
                article && article?.multimedia?.length > 0 && article.multimedia[0]?.url
                  ? `https://nytimes.com/${article.multimedia[0].url}`
                  : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
              }
            />
            <CardContent>
              {/* <small>{moment(article.)}/</small> */}
              <Typography gutterBottom variant="h5" component="div">
                <a
                  href={article.web_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {article.headline.main}
                </a>
                {/* {article.abstract} */}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {article.byline.original}

                {/* {article.lead_paragraph} */}
              </Typography>
              <small>{moment(article.pub_date).format("DD-MMM-YYYY")}</small>
              <br />
              <Typography variant="body2" component="p">
                {article.snippet}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleLearnMore(article.web_url)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}

      {articles &&
        articles.length > 0 &&
        filters === "guardian" &&
        articles.map((article) => (
          <Card sx={{ maxWidth: 345, float: "left", margin: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/7/75/The_Guardian_2018.svg"
              }
              // src={
              //   article?.multimedia[0]?.url
              //     ? `https://nytimes.com/${article.multimedia[0].url}`
              //     : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
              // }
            />
            <CardContent>
              {/* <small>{moment(article.)}/</small> */}
              <Typography gutterBottom variant="h5" component="div">
                <a
                  href={article.webUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {article.webTitle}
                </a>
                {/* {article.abstract} */}
              </Typography>

              <small>
                {moment(article?.webPublicationDate).format("DD-MMM-YYYY")}
              </small>
              <br />
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleLearnMore(article.webUrl)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default NewsFeed;
