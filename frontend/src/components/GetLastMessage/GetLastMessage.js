import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import API from "../../utils/API";


export class GetLastMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            comments: []
        };
      }

    async componentDidMount() {
        let allMessages = await API.getLastMessage();
        let data = allMessages.data;
        this.setState({ messages: data.message, loading:false});
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
            <h3 className="Titre">Derniers billets</h3>
            <Slider {...settings}>
            {this.state.messages.map(message => (
                <h3>
                    <ul>
                        <li className="Cartel" key= {message.body}> <p>{message.body} </p>
                        <p>par {message.username} </p>
                        <p> {message.date} </p>
                        </li>
                    </ul>
                </h3>
                ))}
            </Slider>
            </div>
        )
    }
}

export default GetLastMessage;
