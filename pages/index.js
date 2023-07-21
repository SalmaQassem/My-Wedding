import Head from "next/head";
import Landing from "@/components/Landing/Landing";
import BookingForm from "@/components/Landing/BookingForm";
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
        <BookingForm /*data={props.governorates}*/ />
      </main>
    </>
  );
};
/*export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/Booking");
  const data = await response.json();
  return {
    props: {
      governorates: data,
    },
  };
}*/

export default HomePage;
