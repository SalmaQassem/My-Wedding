import Head from "next/head";
import Landing from "@/components/Landing/Landing";
import BookingForm from "@/components/Landing/BookingForm";
import { MongoClient } from "mongodb";
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>My Wedding</title>
        <meta
          name="description"
          content="Wedding Halls reservation website created using next js"
        />
      </Head>
      <main>
        <Landing />
        <BookingForm gov={props.governorates} cities={props.cities} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
  );
  const db = client.db();
  const governoratesCollection = db.collection("Governorates");
  const govs = await governoratesCollection.find().toArray();

  const citiesCollection = db.collection("Cities");
  const cities = await citiesCollection.find().toArray();

  client.close();

  return {
    props: {
      governorates: govs.map((item) => ({
        id: item._id.toString(),
        gov_id: item.gov_id,
        name: item.name,
      })),
      cities: cities.map((item) => ({
        id: item._id.toString(),
        gov_id: item.gov_id,
        name: item.name,
        city_id: item.city_id,
      })),
    },
  };
}

export default HomePage;
