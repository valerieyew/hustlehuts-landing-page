const ArrowRight = (props: React.SVGAttributes<SVGElement>) => {
  const { width = "21", height = "10", fill = "currentColor" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7188 5.83958H1.0625C0.827778 5.83958 0.633681 5.76285 0.480208 5.60937C0.326736 5.4559 0.25 5.2618 0.25 5.02708C0.25 4.79236 0.326736 4.59826 0.480208 4.44479C0.633681 4.29132 0.827778 4.21458 1.0625 4.21458H17.7458L15.4167 1.88542C15.2722 1.74097 15.2 1.56042 15.2 1.34375C15.2 1.12708 15.2812 0.9375 15.4438 0.775C15.6062 0.6125 15.7958 0.53125 16.0125 0.53125C16.2292 0.53125 16.4188 0.6125 16.5813 0.775L20.2646 4.45833C20.3549 4.54861 20.4181 4.63889 20.4542 4.72917C20.4903 4.81944 20.5083 4.91875 20.5083 5.02708C20.5083 5.13542 20.4903 5.23472 20.4542 5.325C20.4181 5.41528 20.3549 5.50556 20.2646 5.59583L16.5813 9.27917C16.4007 9.45972 16.2066 9.54549 15.999 9.53646C15.7913 9.52743 15.6062 9.44167 15.4438 9.27917C15.2812 9.11667 15.2 8.92257 15.2 8.69687C15.2 8.47118 15.2722 8.28611 15.4167 8.14167L17.7188 5.83958Z"
        fill={fill}
      />
    </svg>
  );
};
export default ArrowRight;
