type Props = {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
};

const IconCross = ({
  className,
  width = 24,
  height = 24,
  fill = '#000',
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    fill="none"
    className={className}
  >
    <path
      fill={fill}
      d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"
    ></path>
  </svg>
);

export default IconCross;
