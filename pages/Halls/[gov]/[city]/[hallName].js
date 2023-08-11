import classes from "../../../../styles/Halls/_hallDetails.module.scss";
import { MongoClient } from "mongodb";
import StyledContainer from "@/components/UI/StyledContainer";

const HallDetails = (props) => {
  return (
    <StyledContainer>
      <h1>name {props.hallData.name}</h1>
    </StyledContainer>
  );
};

export default HallDetails;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const hallsCollection = db.collection("Halls");
  const halls = await hallsCollection.find().toArray();
  client.close();

  return {
    fallback: false,
    paths: halls.map((item) => ({
      params: {
        gov: item.gov_name,
        city: item.city_name,
        hallName: item.name,
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const { gov, city, hallName } = params;

  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const hallsCollection = db.collection("Halls");
  const selectedHall = await hallsCollection.findOne({
    gov_name: gov,
    city_name: city,
    name: hallName,
  });
  client.close();

  return {
    props: {
      hallData: {
        id: selectedHall._id.toString(),
        name: selectedHall.name,
        address: selectedHall.address,
      },
    },
  };
}
