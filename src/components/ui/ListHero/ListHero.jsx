import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import { HeroCart } from "../HeroCart/HeroCart";
import { getListHeros } from "../../../redux/action";

export const ListHero = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // CALL API
  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
      );
      console.log("dataaa", res);
      dispatch(getListHeros(res.data.results));
      setData(res.data.results);
    };
    getApi();
  }, []);
  return (
    <div className="list-hero">
      <Container>
        <Row>
          {data.map((item) => (
            <Col lg="3" md="6" sm="12" key={item.id}>
              <HeroCart item={item} />;
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
