import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import companyBrahmini from "./Images/logo11.png";
import companyPardha from "./Images/logo12.webp";
import companySupradeepan from "./Images/logo13.webp";
import companyMahajan from "./Images/logo14.webp";
import Images from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const teamMembers = [
  {
    name: "Ms. P V Brahmini Priya",
    title: "Co-Founder",
    description: "B.E. Mechanical Engineering from BITS Pilani, Hyderabad",
    image: companyBrahmini
  },
  {
    name: "Dr. P S Gurugubelli",
    title: "Co-Founder",
    description:
      "Head Technology Development Asst Professor @ BITS Pilani, Hyderabad",
    image: companyPardha
  },
  {
    name: "Dr. Supradeepan K",
    title: "Co-Founder",
    description: "Assistant Professor at BITS Pilani, Hyderabad",
    image: companySupradeepan
  },
  {
    name: "Mr. Atharva Mahajan",
    title: "Co-Founder",
    description:
      "Student of MSc Physics and B.E. Mechanical Engineering at BITS Pilani, Hyderabad",
    image: companyMahajan
  }
];

function Contact() {
  return (
    <Container>
      <CardGroup style={{ gap: "0.5rem" }}>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            style={{ width: "20em", backgroundColor: "#e7f3fe" }}
            className="mb-4 border border-primary"
          >
            <Images
              src={member.image}
              roundedCircle
              alt={`Logo of ${member.name}`}
            />

            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Text>{member.title}</Card.Text>
              <Card.Text>{member.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
}

export default Contact;
