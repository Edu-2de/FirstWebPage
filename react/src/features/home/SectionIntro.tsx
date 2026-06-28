import { motion } from 'framer-motion'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Text from '../../components/ui/Text'

export default function PageHome() {
  return (
    <Container className="flex-col!  lg:gap-2!">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex w-full justify-center lg:pt-15 xl:pt-10 pt-20"
      >
        <Text
          textSize="2xl"
          className="shrink-0! leading-none lg:leading-50 xl:leading-normal text-center"
        >
          NIKE SHOES HISTORY
        </Text>
      </motion.div>

      <div className="flex w-full justify-center items-center">
        <img
          className="w-50 max-w-3xs aspect-square saturate-0 object-cover shadow-xl z-0"
          src="/nikeHistory.jpg"
          alt="SneakerHome"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20 xl:gap-2 xl:justify-between md:justify-center pt-12  lg:pt-6">
        <div className="flex flex-col text-justify md:text-start justify-between gap-6  md:max-w-140 ">
          <Text className="font-bold" textSize="lg" textColor="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Button className="xl:max-w-40" buttonSize="sm" buttonColor="primary">
            View Details
          </Button>
        </div>
        <div className="hidden lg:flex   flex-col items-center justify-center">
          <Text textSize="xxl" className="leading-none tracking-tighter">
            20/08
            <br />
            /2025
          </Text>
        </div>
      </div>
    </Container>
  )
}
