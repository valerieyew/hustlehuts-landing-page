const Plus = (props: React.SVGAttributes<SVGElement>) => {
  const { width = "11", height = "11", fill = "currentColor" ,...rest} = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.001 4.90479L6.00276 4.82909L6.07006 0.852506C6.07546 0.528126 5.81694 0.260168 5.49266 0.254036C5.16829 0.247991 4.90095 0.505916 4.89538 0.830292L4.82808 4.80687L0.851729 4.73159C0.527361 4.72555 0.260025 4.98347 0.254447 5.30785C0.248956 5.63231 0.507481 5.90027 0.831849 5.90632L4.8082 5.9816L4.74044 9.98013C4.73495 10.3046 4.99339 10.5725 5.31785 10.5786C5.48007 10.5817 5.62796 10.5187 5.7361 10.4144C5.84425 10.31 5.91247 10.1645 5.91522 10.0023L5.98288 6.00381L9.98109 6.07951C10.1433 6.08258 10.2912 6.01961 10.3993 5.91527C10.5075 5.81093 10.5757 5.6654 10.5785 5.50317C10.5839 5.17897 10.3253 4.91101 10.001 4.90479Z"
        fill={fill}
      />
    </svg>
  );
};
export default Plus;
