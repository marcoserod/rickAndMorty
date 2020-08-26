import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="Loader">
        <svg className="Loading">
          <g>
            <path
              d="M31.6 8.98a4.02 4.02 0 0 0 1.7 5.3l6.12 3.22a52.56 52.56 0 1 0 63.13 10.73L96 33.97a43.88 43.88 0 1 1-53-8.5l-3.65 7.4a4.02 4.02 0 0 0 1.72 5.3 3.73 3.73 0 0 0 5.13-1.67l7.66-15.63a4.18 4.18 0 0 0-1.75-5.4L36.74 7.32a3.73 3.73 0 0 0-5.13 1.66z"
              fill="#000000"
              fillOpacity="1"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 64 64"
              to="360 64 64"
              dur="1800ms"
              repeatCount="indefinite"
            ></animateTransform>
          </g>
        </svg>
      </div>
    );
  }
}

export default Loader;
