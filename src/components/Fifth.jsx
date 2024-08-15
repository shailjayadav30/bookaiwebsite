import firstbook from '../images/firstbook.png';
import secondbook from '../images/secondbook.png';
import thirdbook from '../images/thirdbook.png';
import Books from './Books';

const Fifth = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-4">
      <Books
        imgs={firstbook}
        title="Science Fiction"
        para="As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."
      />
      <Books
        imgs={secondbook}
        title="Mystery"
        para="The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light..."
      />
      <Books
        imgs={thirdbook}
        title="Fantasy"
        para="The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath..."
      />
    </div>
  );
};

export default Fifth;
