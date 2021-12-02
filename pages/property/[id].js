import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import ImageScrollbar from "../../components/ImageScrollbar";

import { fetchApi, baseUrl } from "../../utils/fetchApi";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar photos={photos} />}
    </Box>
  );
};

export default PropertyDetails;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
};
