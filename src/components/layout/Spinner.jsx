import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="mt-20">
      <img
        src={ spinner }
        alt="Loading..."
        width={ 180 }
        className="text-center mx-auto"
      />
    </div>
  );
}

export default Spinner;