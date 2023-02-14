import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import InfoCard from "./InfoCard";

const SWrapper = styled.div`
  font-family: "Segoe UI";
  flex-grow: 1;
  margin: 1.875rem 1rem 0;
  padding-right: 0.5rem;
  height: 500px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #888;
    border-radius: 1rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #f1f1f1;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SNotFound = styled.h2`
  color: #f1f1f1;
  font-family: "Segoe UI", sans-serif;
  font-size: 1.5rem;
`;

const ListPage = ({ data, cityData, allDistricts }) => {
  return (
    <SWrapper>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "7.5px",
          justifyContent: "center",
        }}
      >
        {data?.length ? (
          data?.map((item, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              backgroundColor="white"
              borderRadius={"10px"}
              padding={"5px"}
              width="320px"
            >
              <InfoCard
                key={item.id}
                item={item}
                cityData={cityData}
                allDistricts={allDistricts}
              />
            </Grid>
          ))
        ) : (
          <SNotFound>Aranılan kriterlere uygun sonuç bulunamadı.</SNotFound>
        )}
      </div>
    </SWrapper>
  );
};
export default ListPage;
