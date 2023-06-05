import './index.css'

const BannerDetails = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerDetails
