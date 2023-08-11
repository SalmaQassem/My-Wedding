import classes from "../../../../styles/Halls/_halls.module.scss";
import StyledContainer from "@/components/UI/StyledContainer";
import Overlay from "@/components/UI/Overlay";
import Image from "next/image";
import background from "../../../../media/images/landing.jpg";
import MainHeader from "@/components/UI/MainHeader";
import { MongoClient } from "mongodb";
import { MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";

const Halls = (props) => {
  const router = useRouter();
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
            {props.hallsData.length > 0 &&
              props.hallsData.map((item) => {
                return (
                  <li className={classes.box} key={item.id}>
                    <div className={classes.content}>
                      <div className={classes.hallImage}>
                        <Link href={`${router.asPath}/` + `${item.name}`}>
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
                          <Link href={`${router.asPath}/` + `${item.name}`}>
                            {item.name}
                          </Link>
                          <p>{item.address}</p>
                        </div>

                        <Link
                          href={`${router.asPath}/` + `${item.name}`}
                          className={classes.button}
                        >
                          <span>See availibility</span>
                          <MdArrowForwardIos />
                        </Link>
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

export default Halls;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const citiesCollection = db.collection("Cities");
  const cities = await citiesCollection.find().toArray();
  const path = cities.map((item) => ({
    params: {
      gov: item.gov_name,
      city: item.name,
    },
  }));
  client.close();

  return {
    fallback: false,
    paths: path,
  };
}

export async function getStaticProps({ params }) {
  const { gov, city } = params;

  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const hallsCollection = db.collection("Halls");
  const halls = await hallsCollection.find().toArray();
  const selectedHalls = halls.filter(
    (item) => item.gov_name === gov && item.city_name === city
  );
  const data = selectedHalls.map((item) => ({
    id: item._id.toString(),
    name: item.name,
    gov_name: item.gov_name,
    address: item.address,
  }));
  client.close();

  return {
    props: {
      hallsData: data,
    },
  };
}
