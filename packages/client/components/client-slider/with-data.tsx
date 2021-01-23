import { SimpleGrid, Skeleton } from "@chakra-ui/react"
import { gqlClientSlider } from "lib/gql/clients"
import React from "react"
import { useQuery } from "react-apollo"

import { ClientSlider } from "."

const ClientSliderWithData = () => {
  const { error, data } = useQuery(gqlClientSlider)
  const clients = data?.screens?.[0]?.data

  if (error || !data) {
    return (
      <SimpleGrid columns={3}>
        <Skeleton height="6" my="4" />
        <Skeleton height="6" my="4" />
        <Skeleton height="6" my="4" />
      </SimpleGrid>
    )
  }

  return <ClientSlider clients={clients} />
}

export default ClientSliderWithData
