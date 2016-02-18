export interface MarkConfig {

  // ---------- Color ----------
  /**
   * Whether the shape\'s color should be used as fill color instead of stroke color.
   * This is only applicable for "bar", "point", and "area".
   * All marks except "point" marks are filled by default.
   * See Mark Documentation (http://vega.github.io/vega-lite/docs/marks.html)
   * for usage example.
   */
  filled?: boolean;
  /** Default color. */
  color?: string;
  /** Default Fill Color.  This has higher precedence than config.color */
  fill?: string;
  /** Default Stroke Color.  This has higher precedence than config.color */
  stroke?: string;


  // ---------- Opacity ----------
  /**
   * @minimum 0
   * @maximum 1
   */
  opacity?: number;

  /**
   * @minimum 0
   * @maximum 1
   */
  fillOpacity?: number;

  /**
   * @minimum 0
   * @maximum 1
   */
  strokeOpacity?: number;

  // ---------- Stroke Style ----------
  /**
   * @minimum 0
   */
  strokeWidth?: number;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number[];

  // ---------- Stacking: Bar & Area ----------
  /**
   * @enum ["zero", "center", "normalize", "none"]
   */
  stacked?: string;

  // ---------- Orientation: Bar, Tick, Line, Area ----------
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line, this property determines the sort order of the points in the line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: string;

  // ---------- Interpolation: Line / area ----------
  /**
   * The line interpolation method to use. One of linear, step-before, step-after, basis, basis-open, basis-closed, bundle, cardinal, cardinal-open, cardinal-closed, monotone.
   */
  interpolate?: string;
  /**
   * Depending on the interpolation type, sets the tension parameter.
   */
  tension?: number;

  // ---------- Bar ----------
  /**
   * The width of the bars.  If unspecified, the default width is  `bandWidth-1`,
   * which provides 1 pixel offset between bars.
   */
  barWidth?: number;

  // ---------- Point ----------
  /**
   * The symbol shape to use. One of circle (default), square, cross, diamond, triangle-up, or triangle-down.
   * @enum ["circle", "square", "cross", "diamond", "triangle-up", "triangle-down"]
   */
  shape?: string;

  // ---------- Point Size (Point / Square / Circle) ----------
  /**
   * The pixel area each the point. For example: in the case of circles, the radius is determined in part by the square root of the size value.
   */
  size?: number;

  // ---------- Tick ----------
  /** The width of the ticks. */
  tickWidth?: number;

  /** Thickness of the tick mark. */
  thickness?: number;

  // ---------- Text ----------
  /**
   * The horizontal alignment of the text. One of left, right, center.
   * @enum ["left", "right", "center"]
   */
  align?: string;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of top, middle, bottom.
   * @enum ["top", "middle", "bottom"]
   */
  baseline?: string;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the angle property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the angle property.
   */
  dy?: number;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined by the x and y properties.
   */
  radius?: number;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the x and y properties. Values for theta follow the same convention of arc mark startAngle and endAngle properties: angles are measured in radians, with 0 indicating "north".
   */
  theta?: number;
  /**
   * The typeface to set the text in (e.g., Helvetica Neue).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., italic).
   * @enum ["normal", "italic"]
   */
  fontStyle?: string;
  /**
   * The font weight (e.g., bold).
   * @enum ["normal", "bold"]
   */
  fontWeight?: string;
  // Vega-Lite only for text only
  /**
   * The formatting pattern for text value. If not defined, this will be determined automatically.
   */
  format?: string;
  /**
   * Whether month names and weekday names should be abbreviated.
   */
  shortTimeLabels?: boolean;
  /**
   * Placeholder Text
   */
  text?: string;

  /**
   * Apply color field to background color instead of the text.
   */
  applyColorToBackground?: boolean;
}

export const defaultMarkConfig: MarkConfig = {
  color: '#4682b4',
  strokeWidth: 2,
  size: 30,
  thickness: 1,

  fontSize: 10,
  baseline: 'middle',
  text: 'Abc',

  shortTimeLabels: false,
  applyColorToBackground: false
};