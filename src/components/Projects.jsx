import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/prj1.jpg";
import projImg2 from "../assets/prj2.jpg";
import projImg3 from "../assets/prj3.jpg";
import projImg4 from "../assets/prj4.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {motion} from "framer-motion";

export const Projects = () => {
  const projects = [
    { title: "Prediction of Diseases based on Facial Diagnosis using Deep Learning", description: "This project utilizes deep learning techniques to predict diseases such as beta-thalassemia, leprosy, hyperthyroidism, and Down syndrome based on facial features. A convolutional neural network (CNN) built with TensorFlow analyzes facial images to classify potential health conditions. The model leverages medical image datasets for effective generalization, enabling AI-powered early disease detection with improved accuracy while reducing reliance on traditional diagnostic methods.", imgUrl: projImg1, url: "https://github.com/aashritha-nelavelli/Disease-Prediction.git" },
    { title: "Digit Recognition System Using Deep Learning", description: "This project involves developing a digit recognition system using a custom CNN trained on the MNIST dataset. The model was optimized with Adam and RMSprop, achieving 99.5% accuracy with VGG16. Regularization techniques like dropout were applied to enhance generalization. The trained model was integrated into an Android application with real-time image capture functionality, leveraging TensorFlow for deployment and Android Studio for seamless mobile integration.", imgUrl: projImg2, url: "https://github.com/aashritha-nelavelli/Digit-Recognition.git" },
    { title: "Indoor Navigation System", description: "Designed and developed an AI-powered indoor navigation system to simplify campus navigation, supporting 1,000+ users. Built with ReactJS and a Python Flask/Django backend, the system ensures seamless front-end and back-end communication through scalable RESTful APIs. Comprehensive documentation streamlined collaboration and reduced maintenance time by 50%, enhancing accessibility and efficiency in complex indoor environments.", imgUrl: projImg3 },
    { title: "CollabHealth: Healthcare Service Aggregator", description: "CollabHealth is a web application designed to bridge the gap between marginalized patients and unused healthcare resources. The platform allows paramedical staff to track and book available healthcare slots for patients, while hospitals can list their unused resources. The system ensures real-time booking and slot updates, making healthcare more accessible to those in need. Built with MongoDB, Node.js, and HTML, CollabHealth streamlines healthcare resource management for enhanced patient care.", imgUrl: projImg4, url: "https://github.com/aashritha-nelavelli/CollabHealth-JPMC" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-4 mb-4"> 
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl text-neutral-600"
                  >
                  Projects
                  </motion.h2>
                  <div className="flex flex-wrap gap-8 justify-center">
                    {projects.map((project, index) => (
                      <motion.div
                      key={index}
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        url={project.url}
                      />
                      </motion.div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
