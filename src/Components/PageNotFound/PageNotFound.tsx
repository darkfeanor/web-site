import { Colors } from "../../Styles/colors";
import { PageNotFoundBody, InfoText } from "./PageNotFoundElements";

const PageNotFound = () => {
  return (
    <>
      <PageNotFoundBody>
        <InfoText
          style={{
            fontSize: "4em",
            color: Colors.main_green,
            fontWeight: "bold",
          }}
        >
          Ooops
        </InfoText>
        <InfoText>Something Went Wrong</InfoText>
        <InfoText style={{ fontSize: "1em" }}>
          Error 404 Page Not Found
        </InfoText>
      </PageNotFoundBody>
    </>
  );
};

export default PageNotFound;
