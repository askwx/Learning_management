function Card({title, img, subTitle, description, onClick}) {
	return (
		<div className="card" onClick={onClick}>
                    <div className="card-header">
                        <strong className="card-title mb-3">{title}</strong>
                    </div>
                    <div className="card-body">
                        <div className="mx-auto d-block">
                            <img className="rounded-circle mx-auto d-block" src={img} alt="Card image cap"/>
                            <h5 className="text-sm-center mt-2 mb-1">{subTitle}</h5>
                            <div className="location text-sm-center">
                                <i className="fa fa-map-marker"></i> {description}</div>
                        </div>
                        <hr/>
                        <div className="card-text text-sm-center">
                            <a href="#">
                                <i className="fa fa-facebook pr-1"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter pr-1"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-linkedin pr-1"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-pinterest pr-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
	);
}
export  default Card;