import { Heading, Stack } from '@chakra-ui/react'
import { memo } from 'react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked at
    </Heading>
    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
