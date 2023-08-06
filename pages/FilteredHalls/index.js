import classes from "../../styles/FilteredHalls/_filteredHalls.module.scss";
import StyledContainer from "@/components/UI/StyledContainer";
import Overlay from "@/components/UI/Overlay";
import Image from "next/image";
import background from "../../media/images/landing.jpg";
import MainHeader from "@/components/UI/MainHeader";
import { MongoClient } from "mongodb";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";

const FilteredHalls = (props) => {
  const [cityData, setCityData] = useState({ govId: "", cityId: "" });
  const filteredHalls = props.hallsList.filter((item) => {
    return item.gov_id === cityData.govId && item.city_id === cityData.cityId;
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const gov_Id = localStorage.getItem("gov_id");
      const city_Id = localStorage.getItem("city_id");
      setCityData({ govId: gov_Id, cityId: city_Id });
    }
  }, []);
  return (
    <section className={classes.filtered_halls}>
      <div className={classes.image}>
        <Overlay />
        <StyledContainer>
          <div className={classes.text}>
            <p>halls</p>
            <h1>our halls</h1>
          </div>
        </StyledContainer>
      </div>
      <div className={classes.halls}>
        <StyledContainer>
          <div className={classes.header}>
            <MainHeader contentvalue="our halls">Our halls</MainHeader>
          </div>
          <ul className={classes.hallsList}>
            {filteredHalls.length > 0 &&
              filteredHalls.map((item) => {
                return (
                  <li className={classes.box} key={item.id}>
                    <div className={classes.content}>
                      <div className={classes.hallImage}>
                        <Link href={"/FilteredHalls/" + `${item.id}`}>
                          <Image
                            src={background}
                            priority={true}
                            alt="hall-image"
                          />
                        </Link>
                      </div>
                      <div className={classes.description}>
                        <div className={classes.text}>
                          <span>{item.gov_name}</span>
                          <Link href={"/FilteredHalls/" + `${item.id}`}>
                            {item.name}
                          </Link>
                          <p>{item.address}</p>
                        </div>

                        <Link
                          href={"/FilteredHalls/" + `${item.id}`}
                          className={classes.button}
                        >
                          <span>See availibility</span>
                          <MdArrowForwardIos />
                        </Link>
                        {/*<span>See availibility</span>*/}
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </StyledContainer>
      </div>
    </section>
  );
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const hallsCollection = db.collection("Halls");
  const halls = await hallsCollection.find().toArray();
  client.close();

  return {
    props: {
      hallsList: halls.map((item) => ({
        id: item._id.toString(),
        name: item.name,
        gov_id: item.gov_id,
        gov_name: item.gov_name,
        city_id: item.city_id,
        address: item.address,
      })),
    },
  };
}

export default FilteredHalls;
