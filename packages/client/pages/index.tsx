import { colors } from 'assets/colors'
import { ClientSliderWithData } from 'components/client-slider'
import { Hero } from 'components/hero'
import { Page } from 'components/layouts/page'
import gqlScreen from 'lib/gql/screens/with-service'
import apolloClient from 'lib/gql/utils/init-apollo'
import withApollo from 'lib/gql/utils/with-apollo'
import { imgClient } from 'lib/utils/images'
import { GetStaticProps } from 'next'
import React from 'react'

function Home({ hero }) {
  const image = imgClient.url(hero?.media?.[0]?.url, {
    transformation: [{ eColorize: 30, color: colors.brand[600] }]
  })

  return (
    <Page withHero>
      {hero && (
        <Hero
          hero={hero}
          backgroundColor="brand.600"
          backgroundImage={`url(${image})`}
          backgroundPosition={{ base: 'right', md: 'center' }}
          backgroundSize="cover"
          style={{ backgroundBlendMode: 'lighten' }}
        />
      )}
      <ClientSliderWithData />
    </Page>
  )
}

export default withApollo({ ssr: true })(Home)

export const getStaticProps: GetStaticProps = async () => {
  const response = await apolloClient()?.['query']({
    query: gqlScreen,
    variables: {
      slug: 'home'
    }
  })

  const data = response.data.screens[0]
  return { props: { ...data } }
}
