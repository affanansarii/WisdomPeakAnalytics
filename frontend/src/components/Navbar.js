import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (

        <Flex
            justify="center"
            mb={4}
            as="nav"
            bg={scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent"}
            backdropFilter={scrolled ? "blur(10px)" : "none"}
            color="white"
            py={4}
            px={8}
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000} // Ensure navbar is above other content
            transition="background-color 0.3s ease, backdrop-filter 0.3s ease"
        >

            <Button bg="none" as={Link} to="header" smooth>Header</Button>
            <Button bg="none" as={Link} to="experience" smooth>Experience</Button>
            <Button bg="none" as={Link} to="education" smooth>Education</Button>
            <Button bg="none" as={Link} to="skills" smooth>Skills</Button>
            <Button bg="none" as={Link} to="hobbies" smooth>Hobbies</Button>
            <Button bg="none" as={Link} to="contact" smooth>Contact</Button>

        </Flex>

    )

}

export default Navbar;