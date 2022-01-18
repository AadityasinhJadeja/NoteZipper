import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { Accordion, Button, Card, Badge, AccordionButton } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
// import notes from "../../data/notes";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const MyNotes = () => {

  const [notes,setNotes] = useState([]); 

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
    }
  };

  const fetchNotes = async() => {
      const  {data} = await axios.get("/api/notes");
      console.log(data);
      setNotes(data);
  }

  // console.log(notes);

  useEffect(() => {
      fetchNotes();
  },[])

  return (
    <MainScreen title="Welcome Back Aadityasinh Jadeja.. ">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
        <Accordion.Item eventKey="0">
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
               {/* <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Toggle> */}
                 <Accordion.Header as={Card.Text} variant="link" eventKey="0">                    
                  {note.title}
                </Accordion.Header>
                
              </span>
              <div className="ml-3">
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            {/* <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse> */}
            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - Date
                  </footer>
                </blockquote>
              </Card.Body>
              </Accordion.Body>
          </Card>
          </Accordion.Item>
        </Accordion>
      ))}
      
    </MainScreen>
  );
};

export default MyNotes;