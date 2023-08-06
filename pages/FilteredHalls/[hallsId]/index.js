import { MongoClient, ObjectId } from "mongodb";
import StyledContainer from "@/components/UI/StyledContainer";

const HallDetailsPage = (props) => {

  return (
    <StyledContainer>
      <h1>{props.hallData.name}</h1>
    </StyledContainer>
  );
};

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
        hallsId: item._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const hall_id = context.params.hallsId;

  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const hallsCollection = db.collection("Halls");
  const selectedHall = await hallsCollection.findOne({
    _id: new ObjectId(hall_id),
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

export default HallDetailsPage;
