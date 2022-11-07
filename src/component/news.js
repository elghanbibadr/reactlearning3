function News(props){
    const {title,text}=props;
    return(
  <div className="news">
    <h2 className="news__title">{title}</h2>
    <p className="news__text">{text}</p>
  </div>
    )
  {console.log(props)}
}

export default News;