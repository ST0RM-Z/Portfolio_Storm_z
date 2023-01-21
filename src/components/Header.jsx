import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Badge,
  Img,
  Button,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,

  FaReact,

  FaTwitter,
  FaVuejs,
} from 'react-icons/fa'
import { SiGraphql } from 'react-icons/si'
import '../index.css'
import {MdOutlineSportsCricket} from 'react-icons/md'
import {ImBook} from 'react-icons/im'
import {GiPoolTableCorner} from 'react-icons/gi'

export default function Header() {
  return (
    <>
  
      <Flex>
        <Container maxW="60ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction="column"
          >
            
            <Box position='absolute' left='45.2%' top='6.9%' width='9rem' border="6px solid rgba(255, 250, 0, 0.67)" borderRadius='100%'>
              <Box border="4px solid white" borderRadius='60%'></Box>
            </Box>
            <Box w="100">
              
              <Img
              className='img-avatar'
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "68%",
                
              }}
              alignItems='center'
        justifyContent='center'
            height='28rem'
            width='40rem'
            maxWidth="200%"
            border="10px solid white"
            borderRadius='2rem'
            boxShadow="2em 2em grey "
                // src={ '../AvatarMaker.png'}
              />

            </Box>
            <Box
              display="flex"
              backdropBlur="md"
              border="4px solid black"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: 20, md: 40 }}
                alignItems="center"
                lineHeight="110%"
                fontFamily="mono"
              >
                Hey, I'm Dhairya <span className="wave"> 🧑🏻‍💻</span>
              </Heading>
            </Box>
            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize={{ md: 'large' }}
                marginX="1"
                boxSizing="content-box"
              >
                <span className="highlighted-word">
                  Web development student
                </span>
                , <span className="highlighted-word">full-stack developer</span>{' '}
                and <span className="highlighted-word">tech enthusiast</span>.
              </Text>
            </Box>
            <Box justifyContent="center">
              <Badge
                as="a"
                variant="outline"
                marginBottom="5"
                fontSize="1.2rem"
              >
                stack
              </Badge>
              <Stack
                paddingX="14"
                justify="center"
                direction="row"
                wrap="wrap"
                fontSize="3.2rem"
                spacing="6"
              >
                {/* <Link pointerEvents="none" isExternal>
                  <Icon as={FaPython} />
                </Link>
                <Link pointerEvents="none" isExternal>
                  <Icon as={SiDjango} />
                </Link> */}
                <Link pointerEvents="none" as="span">
                  <Icon as={FaJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaHtml5} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaCss3} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaVuejs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaNodeJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={SiGraphql} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaReact} />
                </Link>
              </Stack>
         
            </Box>
          </Stack>
          <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
              >
                Projects
              </Badge>
              {/* -----project--- */}
              <Stack as={Box} marginY="5" spacing="5"
                 border="1px solid white"
                 borderRadius='1rem'
                 padding='1rem'
              
              >
                
              <Badge
              marginBottom="2"
              fontFamily="monospace"
              letterSpacing="1rem"
              fontSize="1.2rem"
              textAlign="center"
              fontWeight="500"
              color='black'
              padding='0.8rem'
              backgroundColor='rgba(255, 255, 255, 0.67)'
              >
                <Text>
                  !Null                 
                  </Text>
              </Badge>
                <Text fontSize="2xl" fontWeight="thin">
              1  Created a e-commerce web-site using PHP and mysql where user can register and login,It also had option to login as admin to modify products
                  
                </Text>
       
                <Button
                _hover={{bg:'white'}}
                as="a"
                // variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
                textAlign="center"
                // borderRadius='1rem'
                color='blue'
                padding='0.8rem'
                        backgroundColor='rgba(255, 255, 255, 0.67)'
              >
               <Link href="https://github.com/ST0RM-Z/ecom.git" isExternal>
                  <Icon as={FiGithub}/> 
                    
                    </Link>
              </Button>               
              </Stack>
              {/* ------2--- */}
              <Stack as={Box} marginY="5" spacing="5"
                 border="1px solid white"
                 borderRadius='1rem'
                 padding='1rem'
              
              >
                
              <Badge
              marginBottom="2"
              fontFamily="monospace"
              letterSpacing="1rem"
              fontSize="1.2rem"
              textAlign="center"
              fontWeight="500"
              color='black'
              padding='0.8rem'
              backgroundColor='rgba(255, 255, 255, 0.67)'
              >
                <Text>
                 DriveTest               
                  </Text>
              </Badge>
                <Text fontSize="2xl" fontWeight="thin">
                2  Created a web-site using PUG,Node.js & Express.js where user can book appointment for g1,g2,g licence and admin can also view the booking
 
                </Text>
       
                <Button
                _hover={{bg:'white'}}
                as="a"
                // variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
                textAlign="center"
                // borderRadius='1rem'
                color='blue'
                padding='0.8rem'
                        backgroundColor='rgba(255, 255, 255, 0.67)'
              >
               <Link href="https://github.com/ST0RM-Z/DriveTest.git" isExternal>
                  <Icon as={FiGithub}/> 
                    
                    </Link>
              </Button>               
              </Stack>
                {/* -----3--- */}
                <Stack as={Box} marginY="5" spacing="5"
                 border="1px solid white"
                 borderRadius='1rem'
                 padding='1rem'
              
              >
                
              <Badge
              marginBottom="2"
              fontFamily="monospace"
              letterSpacing="1rem"
              fontSize="1.2rem"
              textAlign="center"
              fontWeight="500"
              color='black'
              padding='0.8rem'
              backgroundColor='rgba(255, 255, 255, 0.67)'
              >
                <Text>
            Expedite              
                  </Text>
              </Badge>
                <Text fontSize="2xl" fontWeight="thin">
                3  Created a e-commerce web-site using React and MongoDb where user can register and login,It also had option to login as admin to modify products   
                </Text>
       
                <Button
                _hover={{bg:'white'}}
                as="a"
                // variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
                textAlign="center"
                // borderRadius='1rem'
                color='blue'
                padding='0.8rem'
                        backgroundColor='rgba(255, 255, 255, 0.67)'
              >
               <Link href="https://github.com/ST0RM-Z" isExternal>
                  <Icon as={FiGithub}/> 
                    
                    </Link>
              </Button>               
              </Stack>
             <Stack>
              
             </Stack>
             <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
              >
                Connect via
              </Badge>
              <Stack as={Box} marginY="5" spacing="5">
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://github.com/ST0RM-Z" isExternal>
                    <Icon as={FiGithub} /> @STOMR-Z
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://linkedin.com/in/dhairya-a-3ab692a3" isExternal>
                    <Icon as={FiLinkedin} /> @Dhairya
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="" isExternal>
                    <Icon as={FaTwitter} /> @Dhairya
                  </Link>
                </Text>
              </Stack>
              <Text marginTop="8" fontFamily="mono">
                Get in touch <span>👉</span>{' '}
                <a className="mail" href="mailto:jayarya017@gmail.com">
                  jayarya017@gmail.com
                </a>
              </Text>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
                marginTop="4"
              >
                Hobbies
              </Badge>
              <Stack as={Box}  marginY="5" spacing="5">
                <Text fontSize="2xl" color='rgba(61,122,237)' fontWeight="thin">
                  
                    <Icon as={GiPoolTableCorner} />Snooker
                 
                </Text>
                <Text fontSize="2xl" color='rgba(61,122,237)' fontWeight="thin">
                  
                    <Icon as={ImBook} /> Reading books
                
                </Text>
                <Text fontSize="2xl" color='rgba(61,122,237)' fontWeight="thin">
             
                    <Icon  as={MdOutlineSportsCricket} /> Playing cricket
                 
                </Text>
              </Stack>
          
        </Container>
        
      </Flex>
    </>
  )
}
