import { Button, Flex, Img, Text} from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex color="grey" justifyContent="center" alignItems="center" gap="10px" fontSize="15px" h="7vh" borderBottom="1px solid"> 
            <Flex gap="5px">
                <Img src={require("../../Resources/icons/loading.png")} alt="loading" />
                <Text fontWeight="700"> 10 days left</Text>    
                <Text>left in your Pro trail</Text>
            </Flex>
            <Button colorScheme="orange" color="white" size="md">Subscribe to pro</Button>
            <Button size="md">Book a Demo</Button>
        </Flex>
    )
}