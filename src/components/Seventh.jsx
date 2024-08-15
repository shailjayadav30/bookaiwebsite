import Userssay from "./Userssay";

const Seventh = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-[5rem] px-4">
      <Userssay
        para={`BookAI revolutionized my writing process. I completed my debut novel in just two weeks!`}
        heading="- Sarah J., Author"
      />
      <Userssay
        para="The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."
        heading="- Mark T., Aspiring Writer"
      />
    </div>
  );
};

export default Seventh;
