import PropTypes from 'prop-types';

const BtnEffect = (props) => {
  return (
    <div>
        <div className="group relativer cursor-pointer  transition ease-in-out duration-500 hover:border-gray-100 hover:scale-110">
          <div className="uppercase text-xl flex items-center relative">
            {props.link.split("").map((letter, i) => (
              <div
                key={i}
                className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                {letter}
              </div>
            ))}
            <div className="uppercase text-xl absolute bottom-0 left-0 flex items-center">
              {props.link.split("").map((letter, i) => (
                <div
                  key={i}
                  className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
                  style={{ transitionDelay: `${i * 75}ms` }}
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

BtnEffect.propTypes = {
  link: PropTypes.string.isRequired, // Define PropTypes for 'link'
};

export default BtnEffect;
