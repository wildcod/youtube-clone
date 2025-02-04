type Props = {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
};

const IconCamera = ({
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
      d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
    ></path>
  </svg>
);

export default IconCamera;
