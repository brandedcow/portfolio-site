export default function getTanFromDegrees(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
