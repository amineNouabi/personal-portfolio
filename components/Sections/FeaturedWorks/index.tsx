import {
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
import { motion } from 'framer-motion'
import { memo } from 'react'
import FeaturedCard from './FeaturedCard'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company & personal
        projects.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Play Position!"
            src="/works/play-position.png"
            description="An application designed to help you manage your planned soccer games and find players based on geolocation and profile data. On the other hand, it can help you find the right soccer game if you are alone or new in town, ensuring you can always join a game and enjoy playing"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://pp.nouabi.tech/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Vox Chain"
            description="A Crypto wallet app that makes blockchain actions as easy as having a conversation. It uses the power of AI; speech to text and LLMs to convert user's voice command to blockchain actions."
            src="/works/vox-chain.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Arm stabilizer"
            description="Stabilization of a rotating arm using madgwick filtering algorithm and PID controllers for motors"
            src="/works/arm-stabilizer.png"
            height={{ base: '130px', md: '225px', '2xl': '320px' }}
            ctaUrl="https://www.github.com/amineNouabi/arm-stabilizer"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="AirBnB clone"
            description="An AirBnB clone built with Python, Flask. It allows users to list their properties, search for properties, and book them. And a Command Line Interface to manage the app and database."
            src="/works/airbnb.png"
            height={{ base: '130px', md: '225px', '2xl': '330px' }}
            ctaUrl="https://github.com/amineNouabi/AirBnB_clone_v4"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
