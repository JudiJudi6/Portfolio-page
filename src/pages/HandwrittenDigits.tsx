import Footer from "../ui/Footer";
import AboutProject from "../ui/projectPage/AboutProject";
import Next from "../ui/projectPage/Next";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import ProjectHeader from "../ui/projectPage/ProjectHeader";

export default function HandwrittenDigits() {
  return (
    <div>
      <ProjectHeader
        title="CNN Model"
        desc="Project containing cnn model to recognize digits written by user"
        role="Author"
        leader={false}
        context="University Project"
        skni={false}
        time="2 weeks"
        img="/cnn/ph2.jpg"
        descBg={false}
      />
      <AboutProject
        desc="The project contains a convolutional neural network model for recognizing objects on a photo. It was written in python and then converted to javascript and implemented on the website. The user can write his own number from 0 to 9 in the designated field and then predict the digit. The model can be wrong, especially with the digit 7."
        technologies="Next.js, Tensorflow.js, Tailwind, Python, Keras"
        link="https://github.com/JudiJudi6/Ai-handwritten-digits-classification"
        bgText="Model"
        liveLink="https://ai-handwritten-digits-classification.vercel.app/"
      />
      <ProjectDescription
        type="left"
        title="University Project"
        text={
          <p>
            As a project at the university, I was also obliged to do the
            <span className="text-blue-500"> documentation</span>, and explain
            how cnn network works, which is why it took me 2 weeks, just the
            creation of the model and implementation on the site did not take so
            much. The creation of the model consisted in writing it in python
            using the <span className="text-blue-500">keras library</span>, then
            the created model was{" "}
            <span className="text-blue-500">converted to javascript</span> and
            implemented on the presented website using Tensorflow.js. 
          </p>
        }
        img="/cnn/ph3.png"
      />
      <ProjectGallery img="/cnn/ph4.png" />
      <Next link="/useless-tools" projectName="Useless Tools" />
      <Footer />
    </div>
  );
}
