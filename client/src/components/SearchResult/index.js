import React from "react";
// import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.plants.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.plants.map(plant => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={plant.title + "Card"} key={plant._id}>
                                        {/* col-3 show image of the book */}
                                        <Col size="2" className="bookImage">
                                            <img src={plant.image} alt={plant.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="plantInfo">
                                            <Row>
                                                <h3 className="plantTitle">{plant.title}</h3>
                                            </Row>
                                            <Row>
                                                <p className="plantDescription">{plant.description}</p>
                                            </Row>
                                            <Row>
                                                <p className="plantImage">{plant.image}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveBook btn" id={plant.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Add to Garden
                                        </button>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult