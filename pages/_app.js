import "../styles/_global-styles.scss";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp;
