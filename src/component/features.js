function Features(props) {
    const { number, src } = props;
    return (
        <div className="features">
            <div className="features__image-box">
                <img src={src} />
            </div>
             <div className="features__desc-box">
                <h2 className="features__number">{number}</h2>
                <h3 className="features__title">Reviving Retro PCs</h3>
                <p className="features__desc">What happens when old PCs are given modern upgrades?</p>
             </div>
        </div>
    )
}


export default Features;